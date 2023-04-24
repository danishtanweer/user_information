import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpclient:HttpClient) { }

  requestHeader=new HttpHeaders(
    {"Content-Type": "application/json"
  } 
  );
  
  pathUrl=environment.pathUrl;
  //PATH_OF_API="https://4b5c-45-64-221-254.ngrok.io";

    public GetUsers(){
      // console.log("GetDataForAdmin->"+loginData.value);      
    return this.httpclient.get(this.pathUrl + "/users",  {headers:this.requestHeader, observe: 'response'});
  
  }

}
