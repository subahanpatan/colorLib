import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild('itemName') itemName: ElementRef;
  @ViewChild('address') address: ElementRef;
  @ViewChild('price') price: ElementRef;
  @ViewChild('exampleFormControlFile1') exampleFormControlFile1: ElementRef;
  // @ViewChild('keySkills') keySkills: ElementRef;
  
  adminForm: FormGroup;
  editMode: boolean = false;

  itemData = [
    {
      
      itemName: 'Chilli Chicken',
      address: 'Chinna Bazar',
      price: '250.00',
      exampleFormControlFile1: '',
    },
    {
      
      itemName: 'Chicken Lolipop',
      address: 'Pedda Bazar',
      price: '150.00',
      exampleFormControlFile1: '',
    },
    {
      
      itemName: 'Chicken Fry',
      address: 'VRC Bustand',
      price: '280.00',
      exampleFormControlFile1: '',
    }
  ]

  constructor(private adminService: AdminService) { }

  
  ngOnInit(): void {
    this.onAddItem;
    this.onFetchDetails();
  }

  onAddItem(itemName, address, price, exampleFormControlFile1) {
     this.itemData.push({
      itemName: itemName.value,
      address: address.value,
      price: price.value,
      exampleFormControlFile1: exampleFormControlFile1.value
    });
    this.adminService.saveDetails(this.itemData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error) 
    );
  }

  onFetchDetails() {
    this.adminService.fetchData().subscribe(
      (respon) => {
        const data = JSON.stringify(respon)
        console.log(data)
        this.itemData = JSON.parse(data)
      },
      (error) => console.log(error)
    );
  }

  onEdit(index) {
    if(confirm('Do you want to Modify the Row ?')) {
      this.editMode = true;
      this.itemData[index];
      this.itemName.nativeElement.value = this.itemData[index].itemName;
      this.address.nativeElement.value = this.itemData[index].address;
      this.price.nativeElement.value = this.itemData[index].price;
      this.exampleFormControlFile1.nativeElement.value = this.itemData[index].exampleFormControlFile1;

    }
  }
  onDelete(i) {
    if(confirm ('Do you want to delete this Row ?')) {
      this.itemData.splice(i, 1);
    }
  }


  
}
