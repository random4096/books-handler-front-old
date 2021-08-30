export interface Book {
  id?: string;
  read: boolean;
  owned: boolean;
  savedDate?: Date;
  lendPersonName?: string;
  lendDate?: string;
  data: BookData
}

interface BookData {
  url?: string;
  title: string;
  subtitle?: string;
  authors?: Links;
  publish_date?: string;
  number_of_pages: number;
  subjects?: Links;
  subject_places?: Links;
  subject_people?: Links;
  subject_times?: Links;
  bibkeys?: {
    [index: string]: string;
  };
  cover?: {
    small: string;
    medium: string;
    large: string;
  }
}

interface Links {
  [index: number]: Link;
}

interface Link {
  url: string;
  name: string;
}

export function sortBy(books: Book[], prop: string, order: 1 | -1 = 1): void {
  if(prop === "") return;
  books.sort((a: Book, b: Book) => {
    const propA: string = (a.data[prop as keyof BookData] as string).toUpperCase();
    const propB: string = (b.data[prop as keyof BookData] as string).toUpperCase();
    if (propA < propB) {
      return -1 * order;
    }
    if (propA > propB) {
      return 1 * order;
    }

    return 0;
  });
}

export function filterBy(books:  Book[], filters: string[]): Book[] {
  for (const filter of filters) {
    books = books.filter(book => book[filter as keyof Book]);
  }
  return books;
}