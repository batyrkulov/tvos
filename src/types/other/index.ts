export interface Item {
  id: string;
  title: string;
  poster: string; 
  videoUrl: string;
  episodeDesc: string;
  desc?: string;
}

export interface Section {
  title: string;
  data: Item[];
  isBanner?: boolean;
}