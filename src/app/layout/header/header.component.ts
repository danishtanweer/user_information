import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentDate: Date = new Date();
  menus = [
    { name: 'Menu 1', items: ['Item 1.1', 'Item 1.2', 'Item 1.3'] },
    { name: 'Menu 2', items: ['Item 2.1', 'Item 2.2', 'Item 2.3'] },
    { name: 'Menu 3', items: ['Item 3.1', 'Item 3.2', 'Item 3.3'] }
  ];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
