import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pay-user',
  templateUrl: './pay-user.component.html',
  styleUrls: ['./pay-user.component.scss']
})
export class PayUserComponent implements OnInit {

  @Input('firstName') firstName:string = '';
  @Input('secondName') secondName:string = '';
  @Input('photoLink') photoLink:string = '';

  constructor() { }

  ngOnInit() {
  }



}
