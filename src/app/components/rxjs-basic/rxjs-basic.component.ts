import { Component } from '@angular/core';
import { from, interval, Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-rxjs-basic',
  imports: [],
  templateUrl: './rxjs-basic.component.html',
  styleUrl: './rxjs-basic.component.css'
})
export class RxjsBasicComponent {

    cityList:string[] = ["Pune","Mumbai","Nagpur"];
    cityList$ = of(["Pune","Mumbai","Nagpur"]);

    cityList2$ = from(["Pune","Mumbai","Nagpur"]);

    myInterval$ = interval(2000).pipe(take(3));

    constructor(){

      this.myInterval$.subscribe((res:number)=> {
        console.log('Timer: ',res)
      })

      this.cityList$.subscribe((cityData:string[])=> {
        debugger;
        console.log(cityData)
      })

      this.cityList2$.subscribe((res:string)=> {
        debugger;
      })

      const myObs$ = new Observable(value=> {
        value.next("This is Demo Text")
      })

      myObs$.subscribe(res=> {
        debugger;
        console.log(res)
      })
    }
}
