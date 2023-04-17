import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent implements OnInit {
  models = [
    {value: 'bert-base-uncased', viewValue: 'bert-base-uncased'},
    {value: 'bert-large-uncased', viewValue: 'bert-large-uncased'},
    {value: 'roberta-base', viewValue: 'roberta-base'},
    {value: 'roberta-large', viewValue: 'roberta-large'},
    {value: 'distilbert-base-uncased', viewValue: 'distilbert-base-uncased'},
    {value: 'distilbert-base-cased', viewValue: 'distilbert-base-cased'},
  ];
  sentimentForm = new FormGroup({
    model: new FormControl(this.models[0].value),
    text: new FormControl('')
  })

  debug(foo: any) {
    console.log(foo);
  }

  ngOnInit(): void {
    this.sentimentForm.get('model')?.setValue(this.models[0].value);
  }
}
