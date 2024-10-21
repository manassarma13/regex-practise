//Basic Syntax
//Literal characters: abc matches the string 'abc'.
//Escape special characters: \ before a special character to treat it as a literal. E.g., \. matches a period.

const regex1 = /abc/;
console.log(regex1.test('abcdef')); // true


//Character Classes
//\d: matches any digit (0-9).
//\w: matches any word character (a-z, A-Z, 0-9, _).
//\s: matches any whitespace (space, tab, etc.).
//.: matches any character except a newline.

const regex2 = /\d/;
console.log(regex2.test('The year is 2024')); // true


// Quantifiers
// +: one or more.
// *: zero or more.
// ?: zero or one (optional).
// {n}: exactly n times.
// {n,}: at least n times.
// {n,m}: between n and m times.

const regex3 = /\d+/;
console.log('Price: 50'.match(regex3)); // ['50']


// Anchors
// ^: start of a string.
// $: end of a string.

const regex4 = /^hello/;
console.log(regex4.test('hello world')); // true


// Grouping and Alternation
// (abc): matches the exact sequence abc.
// |: OR operator.

const regex5 = /(cat|dog)/;
console.log(regex5.test('I have a cat.')); // true
console.log(regex5.test('I have a dog.')); // true


// Common Use Cases
// 1. Validate an Email

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
console.log(emailRegex.test('test@example.com')); // true


// 2. Validate a Phone Number (123-456-7890 or (123) 456-7890)

const phoneRegex = /^(\(\d{3}\)\s|\d{3}-)\d{3}-\d{4}$/;
console.log(phoneRegex.test('(123) 456-7890')); // true

// 3. Extract Numbers from a String

const str = 'There are 123 apples and 456 oranges.';
const numbers = str.match(/\d+/g);
console.log(numbers); // ['123', '456']


// Practice
// Find all words that start with 'a' or 'A'
const regex = /\b[Aa]\w*/g;
const text = "Apple, apricot, and bananas are delicious.";
console.log(text.match(regex)); // ['Apple', 'apricot']

// Replace multiple spaces with a single space
const multiSpace = 'Hello   world  with   extra spaces.';
const cleaned = multiSpace.replace(/\s+/g, ' ');
console.log(cleaned); // 'Hello world with extra spaces.'

// Check if a string is a valid hexadecimal color (#RRGGBB or #RGB)
const hexColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
console.log(hexColor.test('#FFA07A')); // true