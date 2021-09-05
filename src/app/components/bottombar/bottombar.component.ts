import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent implements OnInit {
  unbounded = true;
  radius: number = 35;
  constructor() { }

  ngOnInit(): void {
  }

}
