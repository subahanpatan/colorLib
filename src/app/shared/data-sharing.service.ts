import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  
  
  constructor() { }


  getRestaurantItems() {
      return  [
      { 
        siteLink: "https://www.swiggy.com/restaurants/vantasala-2-0-ramji-nagar-nellore-area-nellore-99696",
        imgSrc: "assets/images/items/vantasala.jpg",  
        name: "Vantasala 2.0",
        address: "South Indian, Biryani, Andhra"
      },
      { 
        siteLink: "https://www.swiggy.com/restaurants/janatha-family-dhaba-rammurthy-nagar-nellore-area-nellore-100177",
        imgSrc: "assets/images/items/janata.jpg",
        name : "janatha family dhaba",
        address : "North Indian, South Indian, Biryani"  
      },
      { 
        siteLink: "https://www.swiggy.com/restaurants/harshika-food-court-ngo-colony-nellore-area-nellore-105221",
        imgSrc: "assets/images/items/harshika.jpg",
        name : "Harshika Food Court",  
        address : "Biryani, Chinese, Indian"
      },
      { 
        siteLink: "https://www.swiggy.com/restaurants/green-chilly-family-restaurant-ramji-nagar-nellore-area-nellore-99701",
        imgSrc: "assets/images/items/green-chilly.jpg",
        name : "Green Chilly Family Restaurant",
        address : "Biryani, Chinese, Tandoor, Indian"  
      },
      { 
        siteLink: "https://www.swiggy.com/restaurants/green-chilly-family-restaurant-ramji-nagar-nellore-area-nellore-99701",
        imgSrc: "assets/images/items/green-chilly.jpg",
        name : "Green Chilly Family Restaurant",
        address : "Biryani, Chinese, Tandoor, Indian"  
      },
      { 
        siteLink: "https://www.swiggy.com/restaurants/green-chilly-family-restaurant-ramji-nagar-nellore-area-nellore-99701",
        imgSrc: "assets/images/items/green-chilly.jpg",
        name : "Green Chilly Family Restaurant",
        address : "Biryani, Chinese, Tandoor, Indian"  
      },
      { 
        siteLink: "https://www.swiggy.com/restaurants/green-chilly-family-restaurant-ramji-nagar-nellore-area-nellore-99701",
        imgSrc: "assets/images/items/green-chilly.jpg",
        name : "Green Chilly Family Restaurant",
        address : "Biryani, Chinese, Tandoor, Indian"  
      }

    ];

  }

  getBarItems() {
    return [
      {
      siteLink: "http://tomswinegoa.com/product/kingfisher-strong-beer/",
      imgSrc: "assets/images/barItems/1.jpg",  
      name: "Kingfisher Strong Beer",
      address: "South Indian, Biryani, Andhra"
    },
    {
      siteLink: "http://tomswinegoa.com/product/breezer-orange-275ml/",
      imgSrc: "assets/images/barItems/2.jpg",  
      name: "Breezer Orange 275ml",
      address: "South Indian, Biryani, Andhra"
    },
    {
      siteLink: "http://tomswinegoa.com/product/amrut-two-indies-rum/",
      imgSrc: "assets/images/barItems/3.jpg",  
      name: "Amrut Two Indies Rum",
      address: "South Indian, Biryani, Andhra"
    },
    {
      siteLink: "http://tomswinegoa.com/product/big-banyan-merlot-750ml/",
      imgSrc: "assets/images/barItems/4.jpg",  
      name: "Big Banyan Merlot 750ml",
      address: "South Indian, Biryani, Andhra"
    },
    {
      siteLink: "http://tomswinegoa.com/product/baileys-irish-cream-750ml/",
      imgSrc: "assets/images/barItems/5.jpg",  
      name: "Baileys Irish Cream 750ml",
      address: "South Indian, Biryani, Andhra"
    },
    {
      siteLink: "http://tomswinegoa.com/product/hennessy-vsop-700ml/",
      imgSrc: "assets/images/barItems/6.jpg",  
      name: "Hennessy VSOP 700ml",
      address: "South Indian, Biryani, Andhra"
    },
    {
      siteLink: "http://tomswinegoa.com/product/ardbeg-islay-scotch-whiskey/",
      imgSrc: "assets/images/barItems/7.jpg",  
      name: "Ardbeg Islay Scotch Whiskey",
      address: "South Indian, Biryani, Andhra"
    }
    ];
  }


}
