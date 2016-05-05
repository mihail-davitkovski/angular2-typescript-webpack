
import { Component } from "angular2/core";

@Component({
    selector: 'hello-world',
    template:`
      <ul>
          <li *ngFor="let name of names">Hello {{ name }}</li>
      </ul>`
})
export class HelloWorld {
 private names: Array<string>;

 constructor() {
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
 }
}


