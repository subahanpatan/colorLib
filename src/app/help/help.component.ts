import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public show:boolean = false;
  public show1:boolean = false;
  public show2:boolean = false;
  public show3:boolean = false;

  public buttonName:any = 'Show';
  public buttonName1:any = 'Show';
  public buttonName2:any = 'Show';
  public buttonName3:any = 'Show';
  
  
  itemList: any;

  ngOnInit(): void { 
   // let id = this.route.snapshot.parent['id'];
  }

  toggle() {
    this.show = !this.show;
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  toggle1() {
    this.show1 = !this.show1;
    if(this.show1)  
      this.buttonName1 = "Hide";
    else
      this.buttonName1 = "Show";
  }
  toggle2() {
    this.show2 = !this.show2;
    if(this.show2)  
      this.buttonName2 = "Hide";
    else
      this.buttonName2 = "Show";
  }
  toggle3() {
    this.show3 = !this.show3;
    if(this.show3)  
      this.buttonName3 = "Hide";
    else
      this.buttonName3 = "Show";
  }
}
