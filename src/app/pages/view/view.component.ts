import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  imports: [NgFor],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  ngOnInit(): void {
    this.loadProducts();
    console.log("ngONINIT");
  }

public productlist =null;

  loadProducts(){

    fetch("http://localhost:8080/product")
    .then(res=>res.json())
     .then(data=>{
       this.productlist=data;
       console.log(this.productlist)
   
    });

  }

}

