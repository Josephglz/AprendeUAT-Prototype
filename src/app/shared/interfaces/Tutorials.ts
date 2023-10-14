export interface Tutorials {
  id: number;
  author: string;
  title: string;
  description: string;
  sinceTime: number;
  tags: Tags[];
  answers: number;
}

export interface Tags {
  name: string;
}
