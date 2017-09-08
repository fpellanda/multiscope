export interface Feed {
  _id?: string;
  name: string;
  language: "de" | "en";
  url: string;
}

export interface Translation {
  en: string;
  de: string;
}
export interface Sign {
  _id?: string;
  name: Translation;
}

export interface Horoscope {
    _id?: string;
    signId: string;
    feedId: string;
    text: string;
    publicationDate: Date
}
