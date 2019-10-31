# Is Forty Two
Is forty two is a powerful, well-engineered and optimised javascript library to check if a number is 42.
The idea came from the library "is-thirteen" (https://github.com/jezen/is-thirteen) which does the same as this library but for the number 13.   
This library is frequently updated and new features are added whenever we have the idea of a new one.
## Usage
To start using this lovely library, simply include the script in your HTML document:
```html
<script src="is-forty-two.js"></script>
```
And then you can use it that way:
```javascript
is(85).dividedBy(2).times(4).plus(44).minus(2).multipleOf().FortyTwo(); // False
is(41.5).dividedBy(2).times(2).plus(3).minus(2).roughly().FortyTwo(); // True
is(1977).theYearTheAgeOfPeopleBornThisYearIs().FortyTwo(); // True
is(24).theInvertedDigitsOf().FortyTwo(); // True
```
More generally:
```javascript
is(yourNumber).{operations}.{option}.FortyTwo();
```
Note: operations & options are not necessary:
```javascript
is(42).FortyTwo(); // True
is(24).FortyTwo(); // False
```

### Operations
* `minus(value)`
* `plus(value)`
* `times(value)`
* `dividedBy(value)`
* `theAnswerTwo(equation)` see below

### Options
* `theYearTheAgeOfPeopleBornThisYearIs()`
* `roughly()`
* `multipleOf()`
* `containing()`
* `theInvertedDigitsOf()`

## Equations
Do you have an equation and you want to know if the value for x is 42? No problem!
```javascript
is().theAnswerTwo("2 * x + 3 = 1 * x + 45").FortyTwo(); // True
```
__Important:__ The syntax of a regular javascript arithmetic expression must be followed. See: https://www.w3schools.com/js/js_arithmetic.asp.