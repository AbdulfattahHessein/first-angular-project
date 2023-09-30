import { Injectable } from '@angular/core';
import { ICategory } from '../models/ICategory';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories: ICategory[] = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Camera' },
  ];
  getCategoryById(categoryId: number): ICategory {
    return (
      this.categories.find((c) => c.id == categoryId) ?? {
        id: 0,
        name: 'No Category',
      }
    );
  }
  constructor() {}
}
