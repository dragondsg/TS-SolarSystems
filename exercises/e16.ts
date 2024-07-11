// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export function find<S>(array: S[], callback: Function): S | undefined {
  for (let elm of array) {
    if (callback(elm)) {
      return elm;
    }
  }
}
