// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name
//  must have destructured parameters

import { Planet } from "../data/Types";

export function findPlanetByMoon({
  planets,
  moonName,
}: {
  planets: Planet[];
  moonName: string;
}) {
  for (let planet of planets) {
    if (planet.moonsCount > 0) {
      for (let moon of planet.moons) {
        if (moon.toLowerCase() == moonName.toLowerCase()) {
          return planet;
        }
      }
    }
  }
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
