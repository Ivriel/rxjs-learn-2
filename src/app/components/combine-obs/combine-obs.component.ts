import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { concatMap, exhaustMap, forkJoin, mergeMap, of, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-combine-obs',
  imports: [ReactiveFormsModule],
  templateUrl: './combine-obs.component.html',
  styleUrl: './combine-obs.component.css'
})
export class CombineObsComponent {
  stateData$ = of(["Mp","MH","Goa"])
  cityData$ = of(["Pune","Nagpur","Mumbai","Solapur"])

  http = inject(HttpClient)
  searchControl:FormControl = new FormControl()
  loginClick$ = new Subject<void>()

  constructor(){
    // this.searchControl.valueChanges.subscribe((search:string)=> {
    //   this.http.get("https://dummyjson.com/products/search?q="+search).subscribe((res:any)=> {
    //     console.log("User response" + res)
    //   })
    // })

    // this.searchControl.valueChanges.pipe(
    //   switchMap((search:string)=> this.http.get("https://dummyjson.com/products/search?q="+search))// buat cancel observable sebelumnya dan hanya dapat yang terakhir execute nya
    // ).subscribe((res:any)=> {
    //   console.log(res)
    // })

    // this.searchControl.valueChanges.pipe(
    //   mergeMap((search:string)=> this.http.get("https://dummyjson.com/products/search?q="+search))
    // ).subscribe((res:any)=> {
    //   console.log(res)
    // })

    
    // this.searchControl.valueChanges.pipe(
    //   concatMap((search:string)=> this.http.get("https://dummyjson.com/products/search?q="+search))
    // ).subscribe((res:any)=> {
    //   console.log(res)
    // })

  //   const $users = this.http.get("https://jsonplaceholder.typicode.com/users");
  //   const $posts = this.http.get("https://jsonplaceholder.typicode.com/posts");

  //   forkJoin([$users,$posts]).subscribe((res:any)=> {
  //   },error=> {
  //   }
  // )

  //   forkJoin([
  //     this.stateData$,
  //     this.cityData$
  //   ]).subscribe((res:any)=> {
  //   })

  //   this.stateData$.subscribe((res:any)=> {
  //   })
  //   this.cityData$.subscribe((res:any)=> {
  //   })

     this.loginClick$.pipe(exhaustMap(()=> {
      return this.http.get("https://jsonplaceholder.typicode.com/users")
    })).subscribe((res:any)=> {
      console.log(res)
    })

    // this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=> {
    //   console.log(res)
    // })

  }


  onButtonClick(){
    this.loginClick$.next()
  }

}
