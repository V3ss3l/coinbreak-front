import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeedGenerationComponent } from './seed-generation/seed-generation.component';
import {WalletApiService} from "./wallet-api.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatExpansionModule} from "@angular/material/expansion";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {MatRippleModule} from "@angular/material/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SeedGenerationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatMenuModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatExpansionModule,
    ClipboardModule,
    MatRippleModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [WalletApiService, MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
