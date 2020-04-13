import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { delay, filter, scan } from 'rxjs/operators';
import MathUtility from '../../helpers/MathUtility';
import MathValidator from '../../validators/MathValidator';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  secondsPer: number = 0;

  math: FormGroup = new FormGroup({
    x: new FormControl(MathUtility.RandomNumber()),
    y: new FormControl(MathUtility.RandomNumber()),
    answer: new FormControl('')
  }, [ MathValidator.Addition('answer', 'x', 'y')
  ]);

  constructor() { }

  get x(): Number {
    return this.math.value.x;
  }
  get y(): Number {
    return this.math.value.y;
  }

  ngOnInit(): void { 
    this.math.statusChanges
      .pipe(
        filter(value => value === 'VALID'), 
        delay(333),
        scan((accumulator) => {
          return {
            total: accumulator.total + 1,
            start: accumulator.start
          }
        }, { total: 0, start: new Date() }))
      .subscribe(({total, start}) => {
        this.secondsPer = (
          new Date().getTime() - start.getTime()
        ) / total / 1000;
        this.math.setValue({
          x: MathUtility.RandomNumber(),
          y: MathUtility.RandomNumber(),
          answer: ''
        });
    });
  }
}
