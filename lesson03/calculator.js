// Declare variables representing fractions
let x = { numerator: 1, denominator: 2 };
let y = { numerator: 1, denominator: 3 };
let z = { numerator: 2, denominator: 5 };
let b = { numerator: 3, denominator: 4 };

// Perform math operations with fractions
let equation1 = x.numerator / x.denominator + y.numerator / y.denominator;
let equation2 = z.numerator / z.denominator - x.numerator / x.denominator;
let equation3 = y.numerator / y.denominator * b.numerator / b.denominator;
let equation4 = b.numerator / b.denominator / z.numerator * z.denominator;

// Console log the results
console.log( equation1 > 0.5 ? "Hi" : equation1);
console.log( equation2 < 0.5 ? "javascript" : equation2);
console.log( equation3 < 0.5 ? "is" : equation3);
console.log( equation4 > 0.5 ? "intimidating" : equation4);