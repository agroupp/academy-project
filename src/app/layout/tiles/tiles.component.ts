import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {
  tiles: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.generateTiles();
  }
  generateTiles(){
    for (let i = 0; i < 3; i++) {
      this.tiles.push('' + i)
    }
  }

}
