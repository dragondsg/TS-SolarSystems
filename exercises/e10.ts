// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// make sure that you destructure your parameters

import { SolarBodies } from "../data/Types";

export function getAsteroidDataByName({
  allData,
  asteroidName,
}: {
  allData: SolarBodies;
  asteroidName: string;
}) {
  return allData.asteroids.filter(
    (asteroid) => asteroid.name == asteroidName
  )[0];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
