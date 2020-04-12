import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import MathUtility from '../../helpers/MathUtility';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  math = new FormGroup({
    x: new FormControl(MathUtility.RandomNumber()),
    y: new FormControl(MathUtility.RandomNumber()),
    answer: new FormControl('')
  }, [(form: AbstractControl) => {
    const {x, y, answer} = form.value;
    
    if (x + y === parseInt(answer)) {
      return null;
    }

    return { addition: true };
  }]);

  constructor() { }

  get x(): Number {
    return this.math.value.x;
  }
  get y(): Number {
    return this.math.value.y;
  }

  ngOnInit(): void { }
}
