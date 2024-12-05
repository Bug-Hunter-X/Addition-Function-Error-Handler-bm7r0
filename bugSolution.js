function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number values
  }
  return a + b;
}
//Additional handling could include throwing a custom error for better debugging.
//Example:
//if (typeof a !== 'number' || typeof b !== 'number') {
//  throw new Error('Inputs must be numbers.');
//}