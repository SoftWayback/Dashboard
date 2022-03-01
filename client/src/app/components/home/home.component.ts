import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BlockCardSpotifyComponent } from '../block-card-spotify/block-card-spotify.component';
import { BlockCardDiscordComponent } from '../block-card-discord/block-card-discord.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BlockData } from './block-data';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  status = 'DOWN';
  private statusUrl = '/api/status';
  userName = 'teste';
  test;

  constructor(private router: Router, private http: HttpClient) {}
  goToLink(url: string) {
    window.open(url, '_blank');
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  ngOnInit() {
    this.blocks_discord = [];
    this.blocks_spotify = [];
    this.blocks_spotify_playlist = [];
    this.blocks_github = [];
    this.blocks_github_fetched = [];
  }

  blocks_discord: BlockData[] = [];
  blocks_spotify: BlockData[] = [];
  blocks_spotify_playlist: BlockData[] = [];
  blocks_github: BlockData[] = [];
  blocks_github_fetched: BlockData[] = [];

  addCard_Spotify() {
    this.blocks_spotify.push({
      blockHash: Math.random().toString(36).substring(2),
      blockNumber: this.blocks_spotify.length + 1,
      previousBlock: this.blocks_spotify.length - 1,
      transactions: [
        {
          sender: 'sender',
          recipient: 'recipient',
          amount: 1,
          fee: 200,
        },
      ],
    });
  }

  addCard_Spotify_playlist() {
    this.blocks_spotify_playlist.push({
      blockHash: Math.random().toString(36).substring(2),
      blockNumber: this.blocks_spotify_playlist.length + 1,
      previousBlock: this.blocks_spotify_playlist.length - 1,
      transactions: [
        {
          sender: 'sender',
          recipient: 'recipient',
          amount: 1,
          fee: 200,
        },
      ],
    });
  }

  addCard_Discord() {
    this.blocks_discord.push({
      blockHash: Math.random().toString(36).substring(2),
      blockNumber: this.blocks_discord.length + 1,
      previousBlock: this.blocks_discord.length - 1,
      transactions: [
        {
          sender: 'sender',
          recipient: 'recipientee',
          amount: 1,
          fee: 200,
        },
      ],
    });
  }

  addCard_Github() {
    this.blocks_github.push({
      blockHash: Math.random().toString(36).substring(2),
      blockNumber: this.blocks_github.length + 1,
      previousBlock: this.blocks_github.length - 1,
      transactions: [
        {
          sender: 'sender',
          recipient: 'recipientee',
          amount: 1,
          fee: 200,
        },
      ],
    });
  }

  addCard_Github_fetched() {
    this.blocks_github_fetched.push({
      blockHash: Math.random().toString(36).substring(2),
      blockNumber: this.blocks_github_fetched.length + 1,
      previousBlock: this.blocks_github_fetched.length - 1,
      transactions: [
        {
          sender: 'sender',
          recipient: 'recipientee',
          amount: 1,
          fee: 200,
        },
      ],
    });
  }

  update_html() {
    console.log(this.test);
  }

  clearCards() {
    this.blocks_spotify.length = 0;
    this.blocks_discord.length = 0;
    this.blocks_github.length = 0;
    this.blocks_github_fetched.length = 0;
    this.blocks_spotify_playlist.length = 0;
  }

  async getProtectedData() {
    this.http.get('http://localhost:8080/spotify').subscribe((response) => {
      this.test = response;
      console.log(this.test.username);
      this.update_html();
    });
  }

  NavigateToConnections() {
    console.log('bonjour');
    this.router.navigate(['/connections']);
  }
}
