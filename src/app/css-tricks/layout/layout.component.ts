import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  tiles: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.generateBoxes();
  }

  generateBoxes() {
    for (let i = 0; i < 10; i++) {
      this.tiles.push('' + i);
    }
  }
}
