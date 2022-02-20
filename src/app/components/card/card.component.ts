import { Component, Input, OnInit } from '@angular/core';
import { App } from 'src/app/models/App';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data: any;

  constructor() {
    //this.data = {}
  }

  ngOnInit(): void {
  }

}
