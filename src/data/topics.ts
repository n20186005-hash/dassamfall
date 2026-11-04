// Data-driven long-tail topic system for dassamfall.com (single-language, Hindi).
// 35 topics in 5 clusters, each with its own search intent. All visible copy is Hindi;
// Hinglish / Latin query spellings appear naturally in FAQ questions only (no duplicate pages).
//
// Editorial rules (SEO report, 4 November 2026):
//  - lead paragraph answers the core question immediately;
//  - no invented fees, timetables, bus routes, facilities, shop names or distances;
//  - conflicting official figures (34/40/45 km, Kanchi/Kachni) are disclosed, not flattened;
//  - volatile facts carry a check date and a "confirm locally" instruction;
//  - every page keeps 2-5 genuinely related internal links plus a way back home;
//  - this is an independent, non-government guide.

import { KNOWLEDGE_TOPICS } from './topics.knowledge';
import { TRANSPORT_TOPICS } from './topics.transport';
import { PRACTICAL_TOPICS } from './topics.practical';
import { AUDIENCE_TOPICS } from './topics.audience';
import { NEARBY_TOPICS } from './topics.nearby';

export type TopicGroup = 'knowledge' | 'transport' | 'practical' | 'audience' | 'nearby';
export type Priority = 'P0' | 'P1' | 'P2';

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface Topic {
  slug: string;
  group: TopicGroup;
  priority: Priority;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  quickAnswers?: Array<{ q: string; a: string }>;
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: string[];
  /** indexes into OFFICIAL_SOURCES from ./site */
  sources: number[];
}

export const TOPIC_GROUP_ORDER: TopicGroup[] = ['knowledge', 'transport', 'practical', 'audience', 'nearby'];

export const TOPIC_GROUPS: Record<TopicGroup, { label: string; description: string }> = {
  knowledge: {
    label: 'नदी, भूगोल और पहचान',
    description: 'किस नदी पर है, कहाँ स्थित है, ऊँचाई, इतिहास और नाम',
  },
  transport: {
    label: 'पहुँच और परिवहन',
    description: 'राँची से रास्ता, कार, बाइक, बस, पार्किंग और हवाई अड्डा',
  },
  practical: {
    label: 'समय, मौसम और सुरक्षा',
    description: 'खुलने का समय, शुल्क, मौसम, बरसात, सुरक्षा और सुविधाएँ',
  },
  audience: {
    label: 'यात्री और गतिविधियाँ',
    description: 'परिवार, वरिष्ठ यात्री, सुलभता, फ़ोटोग्राफ़ी, बजट और भोजन',
  },
  nearby: {
    label: 'आसपास और यात्रा-मार्ग',
    description: 'राँची के जलप्रपात, तुलना, आधे दिन और एक दिन की योजना',
  },
};

export const PRIORITY_LABELS: Record<Priority, string> = {
  P0: 'सबसे पहले',
  P1: 'पहली किस्त',
  P2: 'सत्यापन के बाद',
};

export const TOPICS: Topic[] = [
  ...KNOWLEDGE_TOPICS,
  ...TRANSPORT_TOPICS,
  ...PRACTICAL_TOPICS,
  ...AUDIENCE_TOPICS,
  ...NEARBY_TOPICS,
];

export function topicUrl(slug: string): string {
  return `/${slug}/`;
}

export function topicSlugs(): string[] {
  return TOPICS.map((topic) => topic.slug);
}

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((topic) => topic.slug === slug);
}

export function topicsByGroup(group: TopicGroup): Topic[] {
  return TOPICS.filter((topic) => topic.group === group);
}

export function priorityTopics(): Topic[] {
  return TOPICS.filter((topic) => topic.priority === 'P0');
}
