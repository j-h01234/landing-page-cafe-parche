import { Component } from '@angular/core';
import { BUSINESS_INFO, MenuItem } from '../../shared/business-info';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  protected readonly items: MenuItem[] = BUSINESS_INFO.menuItems;
}
