import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {


  title = 'resto';
  store_types: any[] = [];
  selectedColor: string = 'transparent';



  // Function to change the background color of header and tabs
  changeColor(color: string) {
    this.selectedColor = color; // Update the selected color

    // Change the header background color
    document.documentElement.style.setProperty('--ion-color-primary', color);
     // Change the body background color
     document.body.style.backgroundColor = color; // Change the body background color

    // Change the text color for better contrast (white on darker colors)
    if (color === 'white' || color === '#ffffff') {
      document.documentElement.style.setProperty('--ion-color-dark', 'black');
    } else {
      document.documentElement.style.setProperty('--ion-color-dark', 'white');
    }

    // Change the tabs color or any other elements as needed
    document.documentElement.style.setProperty('--ion-color-tabs', color);
  }



 ngOnInit(){
  this.store_types = [
    { id: 1, name: 'Fat Chef', icon: 'burgerking.jfif' },
    { id: 2, name: 'McDonalds', icon: 'mcdo.png' },
    { id: 3, name: 'McCafee', icon: 'mccafe2.png' },
    { id: 4, name: 'pizzahut.', icon: 'pizzahut..png' },

  ];
 }
}

