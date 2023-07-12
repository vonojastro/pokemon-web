interface stat {
  name: string;
  url: string;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: stat;
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface Pokemon {
  name: string;
  abilities?: [];
  forms?: [];
  height?: number;
  weight?: number;
  order?: number;
  sprites?: Sprites;
  stats?: Stats[];
  url?: string;
}
