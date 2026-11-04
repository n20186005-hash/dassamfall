const host = 'dassamfall.com';
export default {
  /** @param {Request} request @param {{ASSETS:{fetch:(request:Request)=>Promise<Response>}}} env */
  async fetch(request, env) {
    const url = new URL(request.url);
    const proto = request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');
    if (url.hostname === 'www.' + host || proto === 'http') {
      url.protocol = 'https:'; url.hostname = host; url.port = '';
      if (!url.pathname.endsWith('/') && !/\.[a-z0-9]+$/i.test(url.pathname)) url.pathname += '/';
      return new Response(null, {status:308,headers:{Location:url.href}});
    }
    // Path-level trailing-slash normalisation so /<slug> and /<slug>/ share one canonical URL.
    if (!url.pathname.endsWith('/') && !/\.[a-z0-9]+$/i.test(url.pathname)) {
      url.pathname += '/';
      return new Response(null, {status:308,headers:{Location:url.href}});
    }
    const head = request.method === 'HEAD';
    const alias = /^\/(?:404(?:\.html|\/)?|index\.html)$/.test(url.pathname);
    if (url.pathname === '/index.html') return new Response(null,{status:308,headers:{Location:new URL('/'+url.search,url).href}});
    let response = alias ? null : await env.ASSETS.fetch(request);
    if (!response || response.status === 404) {
      response = await env.ASSETS.fetch(new Request(new URL('/404.html',url),{method:'GET'}));
      if (response.status>=300 && response.status<400 && response.headers.get('Location')) {
        const next=new URL(response.headers.get('Location'),url);
        if (next.origin===url.origin && /^\/404(?:\.html|\/)?$/.test(next.pathname)) response=await env.ASSETS.fetch(new Request(next,{method:'GET'}));
      }
      const headers=new Headers(response.headers);headers.delete('Location');headers.set('X-Robots-Tag','noindex');headers.set('Cache-Control','no-store');
      return new Response(head?null:response.body,{status:404,headers});
    }
    return head?new Response(null,{status:response.status,headers:response.headers}):response;
  }
};
