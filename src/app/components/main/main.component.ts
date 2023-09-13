import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public id:number = 0;
  public name: string = "Product";
  public quantity: number = 5;
  private price = 225;
  public description: string = `Simple description about this product`;

  constructor() { }

  public getPrice() {
    return this.price;
  }

  ngOnInit() {
  }

}
