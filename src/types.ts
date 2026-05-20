export type Bilingual = { es: string; en: string };

export type BriefCell = {
  keyEs: string;
  keyEn: string;
  valueEs: string;
  valueEn: string;
  smallEs?: string;
  smallEn?: string;
  withDot?: boolean;
};

export type AboutKv = {
  keyEs: string;
  keyEn: string;
  valueEs: string;
  valueEn: string;
};

export type TimelineEntry = {
  yearRange: string;
  durationEs: string;
  durationEn: string;
  isCurrent?: boolean;
  roleEs: string;
  roleEn: string;
  company: string;
  whereEs?: string;
  whereEn?: string;
  bullets: Bilingual[];
};

export type EducationEntry = {
  yearRange: string;
  titleEs: string;
  titleEn: string;
  institution: string;
};

export type BuiltItem = {
  idx: string;
  nameEs: string;
  nameEn: string;
  ctxEs: string;
  ctxEn: string;
  descEs: string;
  descEn: string;
  stack: string[];
};

export type StackItem = {
  label: string;
  noteEs?: string;
  noteEn?: string;
};

export type StackCell = {
  catEs: string;
  catEn: string;
  items: StackItem[];
  inverted?: boolean;
};
