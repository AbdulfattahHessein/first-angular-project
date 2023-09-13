import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavigationStart, Router, Event as NavigationEvent } from '@angular/router';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  // styles: [`h1{color: red}`, `h2{color: black}`],
  // template: `<h1>Taha Hussein</h1>
  // <h2>Abdulfattah</h2>`
} )
export class AppComponent {
  title = 'first-project';


  showSidebar: boolean = true;
  constructor() {
    if ( window.location.pathname == '/NotFound' )
      this.showSidebar = false;
  }


}
