import { Starship } from './../models/starship';
export const Starships: Starship[] = [
    { 
        name: "Death Star",
        model: "DS-1 Orbital Battle Station",
        manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
        cost_in_credits: "1000000000000",
        length: "120000",
        max_atmosphering_speed: "n/a",
        crew: "342953",
        passengers: "843342",
        cargo_capacity: "1000000000000",
        MGLT: "10",
        hyperdrive_rating: "4.0",
        starship_class: "Deep Space Mobile Battlestation"
    },
    { 
        name: "Millennium Falcon",
        model: "YT-1300 light freighter",
        manufacturer: "Corellian Engineering Corporation",
        cost_in_credits: "100000",
        length: "34.37",
        max_atmosphering_speed: "1050",
        crew: "4",
        passengers: "6",
        cargo_capacity: "100000",
        MGLT: "75",
        hyperdrive_rating: "0.5",
        starship_class: "Light Freighter"
    }
];
