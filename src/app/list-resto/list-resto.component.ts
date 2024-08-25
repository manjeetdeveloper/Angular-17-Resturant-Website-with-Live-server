import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  // deleteResto() {
  // throw new Error('Method not implemented.');
  // }
  collection: Array<any> = []; // Declare collection as an array of any type

  // Array<any> 
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result; // Assign the fetched result to collection
    })
  }


  deleteResto(item: number): void {
  this.resto.deleteResto(item).subscribe((result) => {
    console.warn(result);
    // After deletion, refetch the list
    this.resto.getList().subscribe((updatedResult) => {
      this.collection = updatedResult;
    });
  });
}
}
