import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SentimentComponent} from "./sentiment/sentiment.component";
import {SummarizationComponent} from "./summarization/summarization.component";
import {ArtistComponent} from "./artist/artist.component";

const routes: Routes = [
  {path: 'sentiment', component: SentimentComponent},
  {path: 'summarization', component: SummarizationComponent},
  {path: 'artists', component: ArtistComponent},
  {path: '', redirectTo: '/sentiment', pathMatch: 'full'},
  {path: '**', redirectTo: '/sentiment', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
