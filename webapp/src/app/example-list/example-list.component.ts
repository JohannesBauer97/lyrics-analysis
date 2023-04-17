import {Component, EventEmitter, Output} from '@angular/core';
import {Song} from "./song";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.scss']
})
export class ExampleListComponent {
  songs: Song[] = [];
  @Output() songSelected = new EventEmitter<Song>();

  constructor(private http: HttpClient) {

    for (let i = 0; i <= 1; i++) {
      const url = `/assets/example-lyrics/song${i}.json`
      this.http.get<Song>(url).subscribe((song) => {
        this.songs.push(song);
      });
    }
  }
}
