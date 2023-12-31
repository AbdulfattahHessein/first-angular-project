import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register() {
    this.router.navigate(['/Login']);
  }
  constructor(private router: Router) {}

  ngOnInit() {}
}
