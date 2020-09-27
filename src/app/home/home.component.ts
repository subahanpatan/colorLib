import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../shared/data-sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurantTitle = 'All Restaurant Items';
  itemList: any[];
  barItemList: any[];

  constructor(private dataSahred: DataSharingService,
              private router: Router) { }
   
  ngOnInit() {   
    this.itemList = this.dataSahred.getRestaurantItems();
    this.barItemList = this.dataSahred.getBarItems();
  }

 

  onAddItems() {}

}
