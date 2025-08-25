import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { filter, from, interval, map, of, take } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs-operator',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-operator.component.html',
  styleUrl: './rxjs-operator.component.css'
})
export class RxjsOperatorComponent {
  noList$ = from([11,12,13,14,15,16,17,18,20])
  rollNOList = of([11,12,13,14,15,16,17,18,20])
  timeInterval = interval(1000)

  http = inject(HttpClient);
  apiService = inject(ApiService)
  searchControl = new FormControl();

  constructor(){
    this.apiService.$roleBehaviour.subscribe((res:string)=> {
      debugger;
    })
    this.apiService.$roleSubject.subscribe((res:string)=> {
      debugger;
    })

    this.timeInterval.pipe(
      take(6)
    ).subscribe((res:number)=> {
      console.log(res)
    })

    // this.searchControl.valueChanges.pipe(
    //   filter(searchText=> searchText.length >=3)).subscribe((res:any)=> {
    //     console.log(res)
    // })

    // this.timeInterval.pipe(filter(num=> num %2 === 0)).subscribe((res:number)=> {
    //   console.log(res)
    // })

  //  this.apiService.getJsonUser().subscribe((res:any)=> {
  //   console.log(res)
  //  })
    // this.noList$.pipe(
    //   filter(num=> num % 2 == 0)
    // ).subscribe(
    //   (res:number)=> console.log(res)
    // )

    // this.noList$.subscribe(
    //   (res:number)=> console.log(res)
    // )

  //   this.rollNOList.pipe(
  //     map((result) => result.filter(m=> m%2 == 0))
  //   ).subscribe((result:number[])=> {
  //     console.log(result)
  //   })
  // }
   
  this.apiService.getSingleUser().subscribe((res:any)=> {
    console.log(res)
  })

  }

}
