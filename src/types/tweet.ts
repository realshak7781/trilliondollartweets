export interface Tweet {
  id: string;
  category: string;
  url: string;
  kind: string;
  title: string;
  text: string;
  author: string;
  handle: string;
  badgeCategory: string;
}

export interface CategoryOption {
  value: string;
  label: string;
  count: number;
}

