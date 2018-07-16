import { Component ,OnInit} from '@angular/core';
import {AuthService} from 'app/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuthService],
})
export class AppComponent {
constructor(private authservice :AuthService){

}
 ngOnInit(){
   
 }
 tresult:boolean=true;
  title = 'app';
  login(username:string,pwd:string){
 let validation=this.authservice.Onauth(username,pwd);
 if(validation){
   alert("sucess");
 }else
 {
 alert("minge");}
  }
  Onclick(t:boolean){
if(t){
this.tresult=true;
}else{
this.tresult=false;
}
  }
}
