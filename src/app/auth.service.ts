import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
username="beard";
password="prakash";
  constructor() { }
Onauth(usd:string,pwd:string){
  if(usd==this.username && pwd==this.password){
    return true;
  }
  else{
    return false;
  }
}
}
