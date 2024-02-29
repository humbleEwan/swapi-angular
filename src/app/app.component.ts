import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { GridDirective } from 'src/directives/grid.directive';
import { ApiService } from 'src/services/api/api.service';
import { IPeople, defaultPople } from 'src/types/responses';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

	constructor(private sApi: ApiService) {}

	public async ngAfterViewInit(): Promise<void> {
		this.loadData();
	}

	protected async turnPage(direction: number): Promise<void> {
		this.currentPage += direction;
		this.loadData();
		console.log('asd');
	}

	protected async search(): Promise<void> {
		this.loadData();
	}

	private async loadData(url: string = `https://swapi.dev/api/people?page=${this.currentPage + 1}&search=${this.searchTerm}`): Promise<void> {
		this.isLoading = true;
		this.peopleGrid.clear();

		try {
			this.people = await this.sApi.getPeople(url);
			for(let it of this.people.results) {
				this.peopleGrid.createCharacterCard(it);
			}
			const _pageSize = (this.currentPage + 1) * 10;
			this.pageSize = _pageSize > this.people.count ? this.people.count : _pageSize;
			this.isLoading = false;
		} catch(e) {
			console.log(e);
		}

	}

	//public
	public title: string = 'Swapi Angular';

	//protected
	protected people: IPeople = defaultPople();
	protected isLoading: boolean = true;
	protected currentPage: number = 0;
	protected pageSize: number = 0;
	protected searchTerm: string = '';

	//private
	@ViewChild(GridDirective) private peopleGrid!: GridDirective;

}
