import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from "./song";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.scss']
})
export class ExampleListComponent {
  songs: Song[] = [];
  @Output() songSelected = new EventEmitter<Song>();
  @Input() disabled = false;

  constructor(private http: HttpClient) {

    for (let i = 0; i <= 9; i++) {
      const url = `/assets/example-lyrics/song${i}.json`
      this.http.get<Song>(url).subscribe((song) => {
        this.songs.push(song);
      });
    }
  }
}
