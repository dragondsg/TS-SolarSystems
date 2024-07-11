// SPACE DATA EXERCISE 9
// Return the data object of the planet "Earth"
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

import { SolarBodies } from "../data/Types";

export let findEarthData = (data: SolarBodies) => {
  for (let planet of data.planets) {
    if (planet.id == "earth") {
      return planet;
    }
  }
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
