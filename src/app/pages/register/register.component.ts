import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
public product={
  name:undefined,
  description:undefined,
  catagary:undefined,
  price:undefined
}
saveproduct(){
  console.log(this.product);

  fetch("http://localhost:8080/product", {
    method:'POST',
    body: JSON.stringify(this.product),
    headers: {"Content-type" : "application/json"}
    
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
  })

}
}
