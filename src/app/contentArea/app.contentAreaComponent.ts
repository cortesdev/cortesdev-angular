import { Component } from '@angular/core';


@Component({
  selector: 'main',
  templateUrl: './contentArea.html',
 })

export class contentAreaComponent {


}
// 
// @Component({
//   selector: 'main',
//   templateUrl: './contentArea.html',
//   template: `
//     <b>Using *ngIf:</b>
//     <div *ngIf="!isOn">Light Off</div>
//     <div *ngIf="isOn">Light On</div>
//     <br />
//     <b>Using [hidden]:</b>
//     <div [hidden]="isOn">Light Off</div>
//     <div [hidden]="!isOn">Light On</div>
//     <br />
//     <button (click)="setState()">{{ getButtonText() }}</button>
//   `,
//  })
//
// export class contentAreaComponent {
//
//   private isOn: boolean = false;
//
//   getButtonText(): string {
//     return `Switch ${ this.isOn ? 'Off' : 'On' }`;
//   }
//   setState(): void {
//     this.isOn = !this.isOn;
//   }
//
// }
