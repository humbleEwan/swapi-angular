import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterPopupComponent } from './character-popup/character-popup.component';

import { GridDirective } from 'src/directives/grid.directive';

@NgModule({
	declarations: [
		AppComponent,
		LoaderComponent,
		CharacterCardComponent,

		GridDirective,
		CharacterPopupComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MatDialogModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
