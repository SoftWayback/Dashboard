import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MaterialExampleModule} from '../material.module';

import { BlockCardSpotifyComponent } from './components/block-card-spotify/block-card-spotify.component';
import { BlockCardSpotifyPlaylistComponent } from './components/block-card-spotify-playlist/block-card-spotify-playlist.component';

import { BlockCardDiscordComponent } from './components/block-card-discord/block-card-discord.component';

import { BlockCardGithubComponent } from './components/block-card-github/block-card-github.component';
import { BlockCardGithubFetchedComponent } from './components/block-card-github-fetched/block-card-github-fetched.component';

import {HelloComponent } from './components/home/hello.component';
import { ConnectionComponent } from './components/connection/connection.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    HomeComponent,
    HelloComponent,
    BlockCardSpotifyComponent,
    BlockCardSpotifyPlaylistComponent,
    BlockCardGithubComponent,
    BlockCardGithubFetchedComponent,
    BlockCardDiscordComponent,
    ConnectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialExampleModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
