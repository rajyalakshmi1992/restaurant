import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  cartItems: any = {
    items: []
  }

  constructor(private http:HttpClient) { }

  getAllFoodCategory() {
    return this.http.get("https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory")
  }
  getItemsByRestaByCategoryName(name: string){
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemByCategory?categoryId='+ name)
  }
  getAllFoodMenu(){
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetAllMenu')
  }

  login(obj: any){
   return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/Login",obj)
  }
  placeOrder(obj: any){
    return this.http.post("http://freeapi.miniprojectideas.com/api/zomato/AddNewOrder",obj)
   }

addCart(obj:any){
  return this.http.post("http://freeapi.miniprojectideas.com/api/zomato/AddToCart",obj)
}
}

