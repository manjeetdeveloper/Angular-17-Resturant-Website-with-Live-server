import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto.service';

interface Resto {
  name: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrl: './update-resto.component.css'
})
export class UpdateRestoComponent {
  alert: boolean = false

  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private router: ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);

    this.resto.getCurrentResto(this.router.snapshot.params['id']).subscribe((result) => {
      const resto = result as Resto; // Type assertion
      console.warn(resto);

      this.editResto = new FormGroup({
        name: new FormControl(resto.name),
        email: new FormControl(resto.email),
        address: new FormControl(resto.address)
      });
    });
  }

  //  upadte work krne ke liye ek function create krna hai 

  collection() {
    console.warn("item", this.editResto.value)
    this.resto.updateResto(this.router.snapshot.params['id'], this.editResto.value).subscribe((result) => {
    console.warn("result", result)
    this.alert= true  
    })
  }
closeAlert(){
  this.alert=false
}

}
