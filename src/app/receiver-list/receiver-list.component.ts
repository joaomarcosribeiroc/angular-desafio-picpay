import { ReceiverService } from './../receiver.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-receiver-list',
  templateUrl: './receiver-list.component.html',
  styleUrls: ['./receiver-list.component.scss']
})
export class ReceiverListComponent implements OnInit {
  
  _receiverList:any;

  constructor(private receiverService: ReceiverService) { }

  ngOnInit() {

    this.receiverService.getReceiverList()
      .subscribe((receiverList: { results: any; }) => {

        this._receiverList = receiverList.results
        console.log( this._receiverList )
        
      })
  }
}
