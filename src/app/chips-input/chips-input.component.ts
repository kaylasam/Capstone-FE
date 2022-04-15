import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Keywords {
  name: string;
}

/**
 * @title Chips with input
 */
@Component({
  selector: 'chips-input',
  templateUrl: 'chips-input.component.html',
  styleUrls: ['chips-input.component.css'],
})
export class ChipsInputComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  keywords: Keywords[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keywords
    if (value) {
      this.keywords.push({name: value});
      console.log(this.keywords);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(keywords: Keywords): void {
    const index = this.keywords.indexOf(keywords);

    if (index >= 0) {
      this.keywords.splice(index, 1);
      console.log(this.keywords);
    }
  }
}