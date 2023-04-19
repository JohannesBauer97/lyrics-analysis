import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ApiKeyFormComponent } from './api-key-form/api-key-form.component';
import { ApiKeyService } from './services/api-key.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private bottomSheet: MatBottomSheet, public apiKeyService: ApiKeyService) {
  }

  /**
   * Open the bottom sheet with the API key form
   */
  openApiKeyForm() {
    this.bottomSheet.open(ApiKeyFormComponent);
  }
}
