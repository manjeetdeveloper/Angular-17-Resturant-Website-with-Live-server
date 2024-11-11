import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  alert: boolean = false;

  constructor(private restoService: RestoService) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registerForm.valid) {
      this.restoService.saveResto(this.registerForm.value).subscribe(response => {
        console.log('Registration successful', response);
        this.alert = true; // Show success alert
        this.registerForm.reset(); // Reset the form
      });
    }
  }

  closeAlert() {
    this.alert = false;
  }
}
