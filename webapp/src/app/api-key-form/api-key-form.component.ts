import { Component } from '@angular/core';
import { ApiKeyService } from '../services/api-key.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-api-key-form',
  templateUrl: './api-key-form.component.html',
  styleUrls: ['./api-key-form.component.scss']
})
export class ApiKeyFormComponent {
  hide = true;

  tokenForm = new FormGroup({
    token: new FormControl(''),
  })

  constructor(private apiKeyService: ApiKeyService, private bottomSheetRef: MatBottomSheetRef<ApiKeyFormComponent>) {
    const token = this.apiKeyService.getApiKey();
    if (token) {
      this.tokenForm.setValue({token});
    }
  }

  /**
   * Submit the form
   */
  submit() {
    if (this.tokenForm.invalid || this.tokenForm.pristine) {
      return;
    }

    const token = this.tokenForm.value.token;
    if (token) {
      this.apiKeyService.setApiKey(token);
    } else {
      this.apiKeyService.removeApiKey();
    }

    this.tokenForm.markAsPristine();
    this.bottomSheetRef.dismiss();
  }
}
