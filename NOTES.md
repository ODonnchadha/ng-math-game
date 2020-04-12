# We'll focus on RxJS with Reactive forms with a very fast-paced math game.

- Setup Reactive forms within Angular
```typescript
    import { ReactiveFormsModule } from '@angular/forms';

    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
```
- Consider a custom validator: x + y = answer;
    - Access to the randomly-generated items is not too easy.
    - Use form controls for all three values. And then validate the form group:
    ```html
        <form [formGroup]="math">
            {{ math.value.x }} + {{ math.value.y }} = 
        </form>
    ```
    - Apply "getters" for readibility:
    ```typescript
        get x(): Number {
            return this.math.value.x;
        }
        get y(): Number {
            return this.math.value.y;
        }
    ```
    - And accessibility:
    ```html
        <form [formGroup]="math">
            {{ x }} + {{ y }} = 
        </form>
    ```

    - The Angular way:
    ```typescript
        const start: Date = new Date();
        let solved: number = 0;

        solved ++;
        this.secondsPer = (
          new Date().getTime() - start.getTime()
        ) / solved / 1000;

    ```