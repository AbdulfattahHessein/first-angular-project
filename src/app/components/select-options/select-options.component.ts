import { Component } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.css']
})
export class SelectOptionsComponent {
  
  selectedCategoryId: number = 0;

  categories: ICategory[] = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Camera" },
  ];

}
