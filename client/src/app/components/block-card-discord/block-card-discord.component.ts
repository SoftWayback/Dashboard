import { Component, OnInit, Input } from '@angular/core';
import { BlockData } from '../home/block-data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-block-card-discord',
  templateUrl: './block-card-discord.component.html',
  styleUrls: ['./block-card-discord.component.css'],
})
export class BlockCardDiscordComponent implements OnInit {
  isShown: boolean = false;

  toggleShow() {
    this.isShown = !this.isShown;
  }
  infos;
  @Input()
  blockData!: BlockData;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('http://localhost:8080/data/discordprofile')
      .subscribe((response) => {
        this.infos = response;
        console.log(this.infos);
      });
  }

  getProtectedData() {}
}