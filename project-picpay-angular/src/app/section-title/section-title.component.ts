import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {

  @Input('title') 
  title: string = '';
  
  @Input('description') 
  description: string = '';

  constructor() { }

  ngOnInit() {
  }

}
