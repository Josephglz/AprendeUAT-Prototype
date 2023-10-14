export interface Workshops {
  id: number;
  title: string;
  description: string;
  resourcesLinks: WorkshopsResources[];
}

export interface WorkshopsResources {
  title: string;
  path: string;
  type: string;
  author: string;
}
