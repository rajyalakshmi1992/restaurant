import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../../services/master.service';
import { withJsonpSupport } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-items',
  templateUrl: './restaurant-items.component.html',
  styleUrl: './restaurant-items.component.scss',
})
export class RestaurantItemsComponent {
  items: any[] = [];
  quantity: number =0;
orderObj: any= {
  
    "userId": 0,
    "totalAmount": 0,
    "restaurantId": 0,
    "deliveryAddress": "string"
  
}
selectedFoodItem: any [] = []; 

  constructor(private activate: ActivatedRoute, private master: MasterService) {
    this.getAllFoodCategory();
  }
  getAllFoodCategory(){
    this.activate.params.subscribe((res: any) => {
      this.loadFoodItemsByCategory(res.categoryname);
    });
    const loggedData = localStorage.getItem('restaurantUser');
    if(loggedData != null){
      const data= JSON.parse(loggedData);
      this.orderObj.userId = data.userId;
    }
  }


  loadFoodItemsByCategory(name: string) {
    this.master.getItemsByRestaByCategoryName(name).subscribe((res: any) => {
      this.items = res.data;
    });
  }
openQtyModel(item: any){
  debugger;
  const model=document.getElementById('myModel');
  if(model != null){
    model.style.display = "block";
  }
  this.selectedFoodItem = item;
}
closeQtyModel(item: any){
  const model=document.getElementById('myModel');
  if(model != null){
    model.style.display = "none";
  }
}
  placeOrder(){
const itemObj = {
  "customerId": 0,
    "itemId": this.selectedFoodItem.itemId,
    "quantity": this.quantity
};
this.orderObj.restaurantId = this.selectedFoodItem.restaurantId;

  }
  
}
