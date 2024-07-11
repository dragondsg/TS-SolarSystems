// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

import { SolarBodies } from "../data/Types";

export const allPlanetsMoonsCount = (data: SolarBodies) => {
  let totalCount = 0;
  for (let planet of data.planets) {
    if (planet.moonsCount > 0) {
      totalCount += planet.moonsCount;
    }
  }
  return totalCount;
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
