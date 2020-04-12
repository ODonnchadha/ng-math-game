import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  math = new FormGroup({
    x: new FormControl(this.randomNumber()),
    y: new FormControl(this.randomNumber()),
    answer: new FormControl(''),
  });

  constructor() { }

  get x(): Number {
    return this.math.value.x;
  }
  get y(): Number {
    return this.math.value.y;
  }

  ngOnInit(): void { }

  randomNumber(): Number {
    return Math.floor(Math.random() * 10);
  }
}
