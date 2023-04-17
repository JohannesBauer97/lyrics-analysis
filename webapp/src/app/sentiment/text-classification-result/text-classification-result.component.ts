import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-classification-result',
  templateUrl: './text-classification-result.component.html',
  styleUrls: ['./text-classification-result.component.scss']
})
export class TextClassificationResultComponent {
  @Input() label: string = 'NaN';
  @Input() score: number = 0;
}
