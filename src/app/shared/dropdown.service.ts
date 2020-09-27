import { Injectable, HostBinding, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  @HostBinding('class.open') isOpen = false;
  
  constructor() { }
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
