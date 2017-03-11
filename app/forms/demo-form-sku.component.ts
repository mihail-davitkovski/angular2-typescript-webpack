import { Component } from '@angular/core';

@Component({
  selector: 'demo-form-sku',
  templateUrl: '../templates/demo-form-sku.component.html'
})
export class DemoFormSkuComponent {
  onSubmit(form: any): void {
    console.log('you submitted value: ', form);
  }
}
