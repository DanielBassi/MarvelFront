export interface ComicDto {
  id: number;
  isFavorite: boolean;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: Variant[];
  collections: any[];
  collectedIssues: any[];
  dates: DateItem[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: any[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface Url {
  type: string;
  urlLink: string;
}

export interface Series {
  resourceURI: string;
  name: string;
}

export interface Variant {
  resourceURI: string;
  name: string;
}

export interface DateItem {
  type: string;
  date: string;
}

export interface Price {
  type: string;
  priceAmount: number;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Creators {
  available: number;
  collectionURI: string;
  items: CreatorItem[];
  returned: number;
}

export interface CreatorItem {
  resourceURI: string;
  name: string;
  role: string;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: StoryItem[];
  returned: number;
}

export interface StoryItem {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Events {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}
