import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit {

  fontSize = 14;
  onChange(value) {
    this.fontSize = value;
  }
  constructor() { }

  ngOnInit() {
  }

}
