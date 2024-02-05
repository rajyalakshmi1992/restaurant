import { Component } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj: any = {
    
      "userName": "",
      "password": ""
    
  }

  constructor(private master: MasterService, private router : Router){}
  
  onLogin(){
this.master.login(this.loginObj).subscribe((res:any)=>{
  if(res.result){
    localStorage.setItem('restaurantUser', JSON.stringify(res.data));
    this.router.navigateByUrl('/foodCategory');
  }else{
    alert(res.message);
  }
})
  }
}
