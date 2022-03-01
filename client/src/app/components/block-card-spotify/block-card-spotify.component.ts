import { Component, OnInit, Input } from '@angular/core';
import { BlockData } from '../home/block-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-block-card-spotify',
  templateUrl: './block-card-spotify.component.html',
  styleUrls: ['./block-card-spotify.component.css'],
})
export class BlockCardSpotifyComponent implements OnInit {
  isShown: boolean = false; 

  toggleShow() {
    this.isShown = !this.isShown;
  }
  data = String;
  infos;
  @Input()
  blockData!: BlockData;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('http://localhost:8080/data/spotifyprofile')
      .subscribe((response) => {
        this.infos = response;
        console.log(this.infos);
      });
  }

  getProtectedData() {}
}