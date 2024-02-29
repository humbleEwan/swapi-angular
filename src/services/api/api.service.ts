import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { IPeople, IPlanet } from 'src/types/responses';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private http: HttpClient) { }

	async getPeople(url: string): Promise<IPeople> {
		return (firstValueFrom(this.http.get(url)) as Promise<IPeople>);
	}

	async getBirthPlanet(url: string): Promise<IPlanet> {
		return (firstValueFrom(this.http.get(url)) as Promise<IPlanet>);
	}

}
