export type Planet = {
    id: string,
    name: string,
    isPlanet: Boolean,
    mass: {massValue: number, massExponent: number},
    vol: {volValue: number, volExponent: number},
    gravity: number,
    avgTemp: number,
    moonsCount: number,
    moons: string[]
};
export type Asteroid = {
    name: string,
    discoveryYear: number,
    orbitalPeriod: number
};
export type SolarBodies = {
    planets: Planet[],
    asteroids: Asteroid[]
};