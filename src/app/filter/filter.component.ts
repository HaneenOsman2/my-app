import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() data!: any[];
  @Output()selected: EventEmitter<string> = new EventEmitter<string>();
  // selectedValue: string = 'All'

  constructor() {}
  ngOnInit(): void {}

  change(event: any) {
   return this.selected.emit(event)
  }

}
