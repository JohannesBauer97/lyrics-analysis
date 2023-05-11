import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SentimentComponent } from './sentiment/sentiment.component';
import { SummarizationComponent } from './summarization/summarization.component';
import { ArtistComponent } from './artist/artist.component';
import { MatSelectModule } from "@angular/material/select";
import { ExampleListComponent } from './example-list/example-list.component';
import { HttpClientModule } from "@angular/common/http";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  TextClassificationResultComponent
} from './sentiment/text-classification-result/text-classification-result.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ApiKeyFormComponent } from './api-key-form/api-key-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SentimentComponent,
    SummarizationComponent,
    ArtistComponent,
    ExampleListComponent,
    TextClassificationResultComponent,
    ApiKeyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
