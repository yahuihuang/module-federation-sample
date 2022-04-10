import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './utils.component.html',
  styles: [
  ]
})
export class UtilsComponent implements OnInit {
  showMobileMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

}
