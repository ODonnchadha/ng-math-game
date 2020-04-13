import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms'
import { map, filter } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective {

  constructor(private element: ElementRef, private ctrl: NgControl) { 
  }

  ngOnInit(): void {
    this.ctrl.control.parent.valueChanges.pipe(
      map(( {x, y, answer }) => Math.abs((x + x - answer) / (x + y))),
      // filter(value => value < 0.2)
      ).subscribe((value)=> {
        if (value < 0.2) {
          this.element.nativeElement.classList.add('ballpark');
        } else {
          this.element.nativeElement.classList.remove('ballpark');
        }
    });
  }
}
