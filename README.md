# Is Forty Two
Is forty two is a powerful, well-engineered and optimised javascript library to check if a number is 42.
The idea came from the library "is-thirteen" (https://github.com/jezen/is-thirteen) that does the same as this library but for the number 13.   
This library is frequently updated and new features are added whenever we have the idea of a new one.
## Usage
To start using this lovely library, simply include the script in your HTML document:
```html
<script src="is-forty-two.js"></script>
```
And then you can use it that way:
```javascript
is(85).dividedBy(2).times(4).plus(44).minus(2).multipleOf().FortyTwo(); // False
is(1977).theYearTheAgeOfPeopleBornThisYearIs().FortyTwo(); // True
```
More generally:
```javascript
is(yourNumber).{operations}.{option}.FortyTwo();
```
Note: operations & options are not necessary:
```javascript
is(42).FortyTwo(); // True
```

### Operations
* `minus(value)`
* `plus(value)`
* `times(value)`
* `dividedBy(value)`

### Options
* `theYearTheAgeOfPeopleBornThisYearIs()`
* `roughly()`
* `multipleOf()`