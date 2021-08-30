import { Book } from './book';

export interface Author {
  id: number;
  name: string;
  birthdate: Date;
  keywords: Array<string>;
  books: Array<Book>;
  [x: string]: any 
}
