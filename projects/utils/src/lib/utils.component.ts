import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-utils',
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
