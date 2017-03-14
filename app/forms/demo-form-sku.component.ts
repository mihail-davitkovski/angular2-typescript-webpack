import { Component } from '@angular/core';

@Component({
  templateUrl: '../templates/demo-form-sku.component.html'
})
export class DemoFormSkuComponent {
  onSubmit(form: any): void {
    console.log('you submitted value: ', form);
  }
}
