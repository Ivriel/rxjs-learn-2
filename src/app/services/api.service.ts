import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  $courseDuration = new BehaviorSubject<string>("2 Months");
  $roleBehaviour = new BehaviorSubject<string>("")
  $roleSubject = new Subject<string>()
  private userDetails = new Map<number, Observable<any>>()


  http = inject(HttpClient)

  getJsonUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(

      map((userList: any) => userList.map((user: any) => {
        return {
          id: user.id,// cuma ambil id sama nama. diformat pake map lalu bikin objek array baru
          name: user.name
        }
      })),
      tap(userList => {// melihat datanya yang udah diubah daripada harus subsribe lagi. sekalian aja
        debugger;
      }),
    )
  }

  getSingleUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/users/2").pipe(
      map((userData: any) => userData.address) // cuma ambil array objek dari API
    )
  }

  //  getUserById(id:number) {
  //   return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
  //  }

  getUserById(id: number):any | undefined {
    if (!this.userDetails.has(id)) {
      const userDataObs = this.http.get("https://jsonplaceholder.typicode.com/users/" + id).pipe(
        shareReplay(1) // biar enggak ada api call kalau id nya sama (udah pernah dipanggil)
      );
      this.userDetails.set(id, userDataObs)
    }
    return this.userDetails.get(id)

  }

}
