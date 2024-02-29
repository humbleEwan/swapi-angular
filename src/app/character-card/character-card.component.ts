import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICharacter, defaultCharacter } from 'src/types/responses';
import { CharacterPopupComponent } from '../character-popup/character-popup.component';

@Component({
	selector: 'app-character-card',
	templateUrl: './character-card.component.html',
	styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {

	constructor(public dialog: MatDialog) {}

	protected openModal(): void {
		const dialogRef = this.dialog.open(CharacterPopupComponent, { data: this.data });
	}

	//public
	public data: ICharacter = defaultCharacter();

	//protected
	protected rand: number = Math.floor(Math.random() * 100);

}
