
import { Component } from "angular2/core";

@Component({
    selector: 'hello-world',
    template:`
      <div>
        {{name}}
      </div>`
})
export class HelloWorld {
 private name: string;

 constructor() {
    this.name = 'Mihail Davitkovski';
 }
}


