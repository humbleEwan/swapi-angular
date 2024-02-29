import { Directive, ViewContainerRef } from '@angular/core';
import { CharacterCardComponent } from 'src/app/character-card/character-card.component';
import { ICharacter } from 'src/types/responses';

@Directive({
	selector: '[appGrid]'
})
export class GridDirective {

	constructor(private vcr: ViewContainerRef) { }

	public createCharacterCard(data: ICharacter): void {
		const cardRef = this.vcr.createComponent<CharacterCardComponent>(CharacterCardComponent);
		cardRef.instance.data = data;
	}

	public clear(): void {
		this.vcr.clear();
	}

}
