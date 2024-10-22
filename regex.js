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

const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,4}(\/[\w-]*)*\/?$/;
console.log(urlRegex.test('https://www.example.com')); // true
console.log(urlRegex.test('http://example.com/test')); // true


const dateRegex = /^(0[1-9]|1[0-2])([\/-])(0[1-9]|[12]\d|3[01])\2(\d{4})$/;
console.log(dateRegex.test('10/22/2024')); // true
console.log(dateRegex.test('12-31-1999')); // true


const lettersOnly = /^[A-Za-z]+$/;
console.log(lettersOnly.test('HelloWorld')); // true
console.log(lettersOnly.test('Hello123')); // false


const repeatedWord = /\b(\w+)\s+\1\b/;
console.log(repeatedWord.test('This is is a test.')); // true
console.log(repeatedWord.test('No repetition here.')); // false


const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
console.log(timeRegex.test('23:45')); // true
console.log(timeRegex.test('12:00')); // true
console.log(timeRegex.test('25:00')); // false


const email = 'user@example.com';
const domain = email.match(/@([\w-]+\.[\w-]+)/);
console.log(domain[1]); // 'example.com'


const ipv4Regex = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
console.log(ipv4Regex.test('192.168.1.1')); // true
console.log(ipv4Regex.test('999.999.999.999')); // false


const ingWords = /\b\w+ing\b/g;
const sentence = 'I am reading, running, and swimming.';
console.log(sentence.match(ingWords)); // ['reading', 'running', 'swimming']
