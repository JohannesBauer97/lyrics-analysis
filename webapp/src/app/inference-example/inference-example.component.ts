import {Component} from '@angular/core';
import {HfInference, TextClassificationReturn} from '@huggingface/inference';

@Component({
  selector: 'app-inference-example',
  templateUrl: './inference-example.component.html',
  styleUrls: ['./inference-example.component.scss']
})
export class InferenceExampleComponent {

  classificationInput: string = "";
  classificationResult?: TextClassificationReturn;
  private readonly hf = new HfInference();

  constructor() {

  }

  async classify() {
    if (this.classificationInput) {
      this.classificationResult = await this.hf.textClassification({
        model: 'distilbert-base-uncased-finetuned-sst-2-english',
        inputs: this.classificationInput
      });

    }
  }

}
