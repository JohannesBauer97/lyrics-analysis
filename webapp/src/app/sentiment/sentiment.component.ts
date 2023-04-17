import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HfInference, TextClassificationReturn } from '@huggingface/inference';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent {
  models = [
    {
      id: 0,
      modelName: 'distilbert-base-uncased-finetuned-sst-2-english',
      url: 'https://huggingface.co/distilbert-base-uncased-finetuned-sst-2-english',
      displayName: 'DistilBERT base uncased finetuned SST-2'
    },
    {
      id: 1,
      modelName: 'cardiffnlp/twitter-xlm-roberta-base-sentiment',
      url: 'https://huggingface.co/cardiffnlp/twitter-xlm-roberta-base-sentiment',
      displayName: 'twitter-XLM-roBERTa-base for Sentiment Analysis\n'
    },
    {
      id: 2,
      url: 'https://huggingface.co/yiyanghkust/finbert-tone',
      modelName: 'yiyanghkust/finbert-tone',
      displayName: 'FinBERT'
    },
    {
      id: 3,
      modelName: 'prithivida/parrot_adequacy_model',
      url: 'https://huggingface.co/prithivida/parrot_adequacy_model',
      displayName: 'Parrot'
    }
  ];
  sentimentForm: FormGroup = new FormGroup({
    model: new FormControl(0, [Validators.required]),
    text: new FormControl('', [Validators.required])
  });

  hf = new HfInference(undefined, {use_cache: true});
  textClassificationReturn: TextClassificationReturn = [];
  loadingResults = false;
  errorMessage?: string;

  setText(text: string) {
    this.sentimentForm.controls['text'].setValue(text);
  }

  async submit() {

    const modelName = this.models[this.sentimentForm.value.model].modelName;
    const text = this.sentimentForm.value.text;

    try {
      this.loadingResults = true;
      this.sentimentForm.disable();
      this.textClassificationReturn = await this.hf.textClassification({
        model: modelName,
        inputs: text
      });
      this.loadingResults = false;
      this.sentimentForm.enable();
    } catch (e) {
      console.error('textClassification Error', e);
      if (e instanceof Error) {
        this.errorMessage = e.message;
      }
      this.sentimentForm.enable();
      this.loadingResults = false;
    }

  }

  openModelPage() {
    const url = this.models[this.sentimentForm.value.model].url;
    window.open(url);
  }

}
