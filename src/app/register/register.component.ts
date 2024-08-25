// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {

// }


// import { Component, AfterViewInit } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements AfterViewInit {

//   ngAfterViewInit() {
//     const container = document.getElementById('container');
//     const registerBtn = document.getElementById('register');
//     const loginBtn = document.getElementById('login');

//     registerBtn?.addEventListener('click', () => {
//       container?.classList.add("active");
//     });

//     loginBtn?.addEventListener('click', () => {
//       container?.classList.remove("active");
//     });
//   }
// }
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {

  ngAfterViewInit() {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn?.addEventListener('click', () => {
      container?.classList.add("active");
    });

    loginBtn?.addEventListener('click', () => {
      container?.classList.remove("active");
    });
  }
}

