import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { combineLatest, debounceTime } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-rexjs-reactive-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './rexjs-reactive-form.component.html',
  styleUrl: './rexjs-reactive-form.component.css'
})
export class RexjsReactiveFormComponent implements OnInit{
  userForm!:FormGroup;
  searchControl: FormControl = new FormControl("TEST")
  searchResults:string[] = [];
  passwordMismatch:boolean = false
  
  constructor(private fb:FormBuilder){
    this.userForm = this.fb.group({
      address:['',Validators.required],
      checkMeOut:[false],
      email:[''],
      password:[''],
      confirmPassword:[''],
      address2:[''],
      city:[''],
      state:[''],
      zip:['']
    })
  }
  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(1000) // berikan waaktu 1 detik (tunggu) baru di execute (skenario search pakai API)
    ).subscribe((search:string)=> {
      console.log('Search Changes' + search)
    })
    this.userForm.controls['confirmPassword'].disable()

    this.userForm.controls['email'].valueChanges.subscribe((res:string)=> {
      // debugger;
    })

    // this.searchControl.valueChanges.subscribe((searchText:string)=>{
    //   console.log("searchText: " + searchText);
    // })

    this.userForm.valueChanges.subscribe((formValue:any)=> {
      // debugger;
    })

    this.userForm.controls['password'].valueChanges.subscribe((res:any)=> { // kalau user edit form password, yang changes password juga bakal mandatory
      if(res != '') {
        this.userForm.controls['confirmPassword'].addValidators([Validators.required])
        this.userForm.controls['confirmPassword'].enable()
      }
    })

    this.userForm.statusChanges.subscribe((res:any)=> {
      // debugger;
    })

    combineLatest([ // combine multiple variabel kalau ada salah satu yang berubaah,maka bisa diterapkan action nya
      this.userForm.controls['password'].valueChanges,
      this.userForm.controls['confirmPassword'].valueChanges
    ]).subscribe(([password,confirmPassword])=> {
      this.passwordMismatch = password && confirmPassword && password !== confirmPassword
    })

  }

  onSubmit(){

  }
}
