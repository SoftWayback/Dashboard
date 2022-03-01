import { Component, OnInit, Input } from '@angular/core';
import { BlockData } from '../home/block-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { BindingType } from '@angular/compiler';
@Component({
  selector: 'app-block-card-github-fetched',
  templateUrl: './block-card-github-fetched.component.html',
  styleUrls: ['./block-card-github-fetched.component.css'],
})
export class BlockCardGithubFetchedComponent implements OnInit {
  data = String;
  playerName;
  infos;
  @Input()
  blockData!: BlockData;
  constructor(private http: HttpClient) {}

  GetRepos() {
    this.http.get('http://localhost:8080/data/github/fetched-profile').subscribe((response) => {
      this.infos = response;
      console.log(this.infos);
      console.log("bonjour");
    });
  }


  Fetch_info() {
     console.log(this.playerName);
    this.http.get('http://localhost:8080/data/github_user_fetched', {
      params: {
        searchKey: "devoil-g",
      }
    }).subscribe(response => {
      //console.log(response);
    });
    this.GetRepos();
  };

  ngOnInit() {
  }

  getProtectedData() {}
}