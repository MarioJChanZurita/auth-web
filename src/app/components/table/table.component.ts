import { Component, Input, OnInit, OnChanges, ContentChild, TemplateRef } from '@angular/core';
import { App } from 'src/app/models/App';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ContentChild('contentRow') contentField!: TemplateRef<any>
  @Input() items: any[]
  @Input() hasOptions: boolean

  constructor() { 
    this.items = []
    this.hasOptions = false
  }

  ngOnInit(): void {
    // console.log(this.items) // No toma los valores asincronos
  }

  ngOnChanges(): void {}

}
