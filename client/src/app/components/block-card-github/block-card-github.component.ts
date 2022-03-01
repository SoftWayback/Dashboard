import { Component, OnInit, Input } from '@angular/core';
import { BlockData } from '../home/block-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { BindingType } from '@angular/compiler';
@Component({
  selector: 'app-block-card-github',
  templateUrl: './block-card-github.component.html',
  styleUrls: ['./block-card-github.component.css']
})
export class BlockCardGithubComponent implements OnInit {

  isShown: boolean = false ; // hidden by default


toggleShow() {

this.isShown = ! this.isShown;
}
  data = String;
  infos;
  @Input()
  blockData!: BlockData;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8080/data/githubprofile').subscribe((response) => {
      this.infos = response;
      console.log(this.infos);
    });
  }

  getProtectedData() {

  }

}