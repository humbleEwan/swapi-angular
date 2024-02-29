import { AfterViewInit, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/services/api/api.service';
import { ICharacter, IPlanet, defaultPlanet } from 'src/types/responses';

@Component({
	selector: 'app-character-popup',
	templateUrl: './character-popup.component.html',
	styleUrls: ['./character-popup.component.css']
})
export class CharacterPopupComponent implements AfterViewInit {

	constructor(private dialogRef: MatDialogRef<CharacterPopupComponent>, @Inject(MAT_DIALOG_DATA) protected data: ICharacter, private sApi: ApiService) { }

	public async ngAfterViewInit(): Promise<void> {
		try {
			this.homeworld = await this.sApi.getBirthPlanet(this.data.homeworld);
		} catch(e) {
			console.error(e);
		}

		this.isVisible = true;
	}

	closeDialog() {
		this.dialogRef.close();
	}

	protected isVisible: boolean = false;
	protected rand: number = Math.floor(Math.random() * 100);
	protected homeworld: IPlanet = defaultPlanet();

}
