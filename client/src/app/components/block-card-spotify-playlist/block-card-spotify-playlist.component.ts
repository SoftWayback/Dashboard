import { Component, OnInit, Input } from '@angular/core';
import { BlockData } from '../home/block-data';
import { FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { BindingType } from '@angular/compiler';
@Component({
  selector: 'app-block-card-spotify-playlist',
  templateUrl: './block-card-spotify-playlist.component.html',
  styleUrls: ['./block-card-spotify-playlist.component.css'],
})
export class BlockCardSpotifyPlaylistComponent implements OnInit {
  searchText = '';
  data = String;
  infos;
  playerName;

  seekForm = new FormGroup({
    toseek: new FormControl('')
  });

  @Input()
  blockData!: BlockData;
  constructor(private http: HttpClient) {}

  GetArtist() {
    this.http
      .get('http://localhost:8080/data/spotify/playlist')
      .subscribe((response) => {
        this.infos = response;
        console.log('bonjour');
        console.log(this.infos);
      });
  }
  Fetch_info() {
    console.log(this.seekForm.value.toseek);
    this.http
      .get('http://localhost:8080/data/spotify_artist_info', {
        params: {
          searchKey: this.seekForm.value.toseek,
        },
      })
      .subscribe((response) => {
        console.log(response);
      });
    this.GetArtist();
  }

  ngOnInit() {}

  getProtectedData() {}
}