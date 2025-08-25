import { Component, inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sub-beh-replay',
  imports: [FormsModule],
  templateUrl: './sub-beh-replay.component.html',
  styleUrl: './sub-beh-replay.component.css'
})
export class SubBehReplayComponent implements OnInit {
  studentName$ = new Subject()
  rollNO$ = new Subject<number>()

  takeTill = new Subject<void>()
  userId:number = 0;

  courseName:Subject<string> = new Subject<string>();

  // initSubject = new Subject("ABC")
 
  apiService = inject(ApiService)

  constructor(){

     this.apiService.$roleBehaviour.subscribe((res:string)=> { 
       console.log("Behaviour =>", res);
    })
    this.apiService.$roleSubject.subscribe((res:string)=> {
   console.log("Subject =>", res);
    }) 
    // setTimeout(() => {
    //   this.studentName$.next("Angular 20");
    //   this.rollNO$.next(123);
    //   this.takeTill.next();
    //   this.apiService.$courseDuration.next("3 month + 1 week")
    // }, 4000);
  }

  ngOnInit(): void {
    this.apiService.$courseDuration.subscribe((res:any)=> {
      debugger;
    })
      this.studentName$.subscribe((res:any)=> {
        debugger;
      })
       this.rollNO$.subscribe((res:any)=> {
        debugger;
      })
  }

  onRoleChange(event:any){
    this.apiService.$roleBehaviour.next(event.target.value) // buat dapet valuenya
    this.apiService.$roleSubject.next(event.target.value)
  }

  getUser(){
    this.apiService.getUserById(this.userId).subscribe((res:any) => {
    console.log(res)
  })
  }

}
