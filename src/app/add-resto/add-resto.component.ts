import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css'] // 'styleUrl' changed to 'styleUrls'
})
export class AddRestoComponent implements OnInit {

  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private resto: RestoService) { }
  // alert properties for form 
  alert:boolean=false  // form flase 
  ngOnInit(): void {}

  collectResto(): void {
    this.resto.saveResto(this.addResto.value).subscribe((result) => {
     console.warn("Restaurant added successfully", result);
     this.alert=true  // form alert true check 
   });
   this.addResto.reset({}) //  jab ye excution hoga to ye function form ko BLANK KR DEGA 
  }
  closeAlert()
  {
    this.alert=false
  }
}


// etna to ho gya  abb form submit hone bad ko Blank krne ke liye ham :- ky krnge so.. let get start
