import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-getter-setter',
  templateUrl: './magic-getter-setter.component.html',
  styleUrls: ['./magic-getter-setter.component.css']
})

// we need to use class as we are defining the setter and getter
// methods where we can't achieve with interface

export class MagicGetterSetterComponent implements OnInit {
  private _name!: string;

  get name(): string {
    if(!this._name){
      throw new Error("Name doesn't exist")
    }
    return this._name
  }

  set name(value: string) {
    if(!value) {
      throw new Error('value should not be empty!');
    }
    this._name = value;
  }
  
  constructor() { }

  ngOnInit(): void {
    this.name = 'Test Magic Name';
  }
}
