export interface Post {
    userId: number
    id: number
    title: string
    body: string
  }
  
  /* Interface RICK AND MORTY */

  export interface ApiResponseRM {
    info: Info
    results: CharacterRM[]
  }
  
  export interface Info {
    count: number
    pages: number
    next: string
    prev: any
  }
  
  export interface CharacterRM {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Origin
    location: Location
    image: string
    episode: string[]
    url: string
    created: string
  }
  
  export interface Origin {
    name: string
    url: string
  }
  
  export interface Location {
    name: string
    url: string
  }

  /* Interface POKEMON*/
  
  export interface MiPokemon {
    front_default: string;
    front_shiny: string;
    name: string;
    url: string;
  }

  export interface PokemonBase {
    name: string;
    url: string;
  }
  
  export interface ApiResponsePokemon {
    count: number;
    next: string;
    previous: string;
    results: PokemonBase[];
  }