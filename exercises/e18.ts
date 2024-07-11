// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/Types";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
    let years = asteroids.map((asteroid)=>asteroid.discoveryYear);
    let currentMax: number = 0;
    let maxCount: number = 0;
    for (let year of years) {
        let count = years.filter((elm)=> elm == year).length;
        if (count > maxCount) {
            currentMax = year;
            maxCount = count;
        }
    }
    return currentMax;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
