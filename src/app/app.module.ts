import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerComponent } from './components/player/player.component';
import { HttpClientModule} from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { BottombarComponent } from './components/bottombar/bottombar.component';
import {MatRippleModule} from '@angular/material/core'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PlayerComponent,
    BottombarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTabsModule,
    MatTooltipModule,
    MatChipsModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }