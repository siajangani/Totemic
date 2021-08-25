import { Component, OnInit } from '@angular/core';
import { FizzBuzzRule } from './fizzbuzz.model';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {

  rules: FizzBuzzRule[] = [];
  mappedNumbers: string[] = [];

  constructor() {
    this.addRule(new FizzBuzzRule((num: number) => num % 3 == 0 && num % 5 == 0, 'FizzBuzz'));
    this.addRule(new FizzBuzzRule((num: number) => num % 3 == 0, 'Fizz'));
    this.addRule(new FizzBuzzRule((num: number) => num % 5 == 0, 'Buzz'));
  }

  ngOnInit(): void {
    this.mappedNumbers = this.getMappedEntries(20);
  }

  addRule(rule: FizzBuzzRule) {
    this.rules.push(rule);
  }

  getMappedEntries(num: number) {
    const mappedEntries: string[] = [];

    for (let i = 1; i <= num; i++) {
      mappedEntries.push(this.getMappedString(i));
    }

    return mappedEntries;
  }

  getMappedString(num: number): string {
    const rule = this.rules.find(rule => rule.isMatch(num));
    return rule ? rule.getString() : num.toString();
  }

}
