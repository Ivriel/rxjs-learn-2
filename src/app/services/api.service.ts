import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 http = inject(HttpClient)

 getJsonUser(){
 return  this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
 
  map((userList:any)=> userList.map((user:any)=> {
    return {
      id:user.id,// cuma ambil id sama nama. diformat pake map lalu bikin objek array baru
      name:user.name
    }
  })),
   tap(userList=> {// melihat datanya yang udah diubah daripada harus subsribe lagi. sekalian aja
    debugger;
  }),
 )
 }

 getSingleUser(){
  return this.http.get("https://jsonplaceholder.typicode.com/users/2").pipe(
    map((userData:any)=> userData.address) // cuma ambil array objek dari API
)
 }

}
