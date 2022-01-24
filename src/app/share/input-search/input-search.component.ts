import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  @Output() searchKeyWord: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  getKeyWord(event: any) {
    let keyword = event.target.value;
    this.searchKeyWord.emit(keyword)
  }

}
