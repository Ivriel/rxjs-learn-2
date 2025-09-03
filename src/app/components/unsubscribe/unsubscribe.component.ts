import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  imports: [AsyncPipe],
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.css'
})
export class UnsubscribeComponent implements OnInit,OnDestroy{
  userList:any[] = []
  http = inject(HttpClient)
  subscription!:Subscription; // way 1 to unsubscribe api call (kalau hanya punya 1 subscription di satu component)

  subscriptionList:Subscription[] = []; // way 2 to unsubscribe api call (kalau punya banyak subscription di satu component)
  
  subjectTakeUntil!:Subject<void>; // way 3
  // way 4 take operator

  // way 5 using async pipe
  userList$ = new Observable<any[]>

  ngOnInit(): void {
    this.userList$= this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
      this.getUsers()
  }

  // getUsers(){ // way 1
  //  this.subscription= this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=> {
  //     this.userList = res
  //   })
  // }

  //   getUsers(){ // way 2
  //  this.subscriptionList.push(this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=> {
  //     this.userList = res
  //   }))  
  // }

  getUsers(){ // way 3
    this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      take(1) // subscribe hanya sekali
    ).subscribe((res:any)=> {

    })
  }

  // getPost(){
  //   const sub = this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res:any)=> {
  //   })
  //   this.subscriptionList.push(sub)
  // }
  

    ngOnDestroy(): void {
      this.subscription.unsubscribe()
      this.subjectTakeUntil.next()
      this.subscriptionList.forEach(sub=> {
        sub.unsubscribe()
      })
  }

}
