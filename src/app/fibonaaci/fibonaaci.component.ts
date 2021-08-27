import { Component, OnInit } from '@angular/core';
import { FibonaaciService } from './fibonaaci.service';

//Main Fibonaaci number
@Component({
  selector: 'app-fibonaaci',
  templateUrl: './fibonaaci.component.html',
  styleUrls: ['./fibonaaci.component.css'],
  providers:[ FibonaaciService ]
})
export class FibonaaciComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
}
