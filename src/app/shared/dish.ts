// export class Dish {
//     id: string;
//     name: string;
//     image: string;
//     category: string;
//     featured: boolean;
//     label: string;
//     price: string;
//     description: string;
    
//     rating: string;
//     comment: string;
//     author:string;
//     date: string;
    
   

// }
import { Comment } from './comment';

export class Dish {
  id: string;
  name: string;
  image: string;
  category: string;
  featured: boolean;
  label: string;
  price: string;          
  description: string;
  comments: Comment[];
}