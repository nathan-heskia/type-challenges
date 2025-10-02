// Explanation:
//
// T: The source object type you're picking from
// K extends keyof T: The keys you want to pick
// keyof T gets all possible keys from type T
// extends keyof T constrains K to only be valid keys of T
// This prevents picking non-existent properties!
type MyPick<T, K extends keyof T> = {
  // [P in K]: Iterates over each key P in the union K
  // T[P]: Gets the type of property P from the original type T
  [P in K]: T[P]
} // Creates a new object with only the selected properties
