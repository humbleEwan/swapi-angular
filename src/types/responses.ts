export interface ICharacter {
	birth_year: string,
	eye_color: string,
	films: Array<string>,
	gender: string,
	hair_color: string,
	height: string,
	mass: string,
	name: string,
	skin_color: string,
	species: Array<string>,
	starships: Array<string>,
	url: string,
	vehicles: Array<string>,
	homeworld: string
}

export interface IPeople {
	count: number,
	next: string,
	previous: string,
	results: Array<ICharacter>
}

export interface IPlanet {
	name: string,
	climate: string,
	terrain: string
}

export function defaultPople(): IPeople {
	return {
		count: -1,
		next: '',
		previous: '',
		results: []
	}
}

export function defaultCharacter(): ICharacter {
	return {
		birth_year: '',
		eye_color: '',
		films: [],
		gender: '',
		hair_color: '',
		height: '',
		mass: '',
		name: '',
		skin_color: '',
		species: [],
		starships: [],
		url: '',
		vehicles: [],
		homeworld: ''
	}
}

export function defaultPlanet(): IPlanet {
	return {
		name: '',
		climate: '',
		terrain: ''
	}
}
