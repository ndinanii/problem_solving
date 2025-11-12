# Problem 06: Leap Year Calculator

## Problem Description

Determine whether a given year is a leap year according to the Gregorian calendar rules.

## Requirements

- Function should accept a year as a parameter
- Return a message indicating if the year is a leap year or not
- Follow the Gregorian calendar leap year rules

## Leap Year Rules

A year is a leap year if:
1. It is divisible by 4, **AND**
2. It is NOT divisible by 100, **UNLESS**
3. It is also divisible by 400

### Examples:
- **2024**: Divisible by 4, not by 100 → **Leap year** ✓
- **2000**: Divisible by 400 → **Leap year** ✓
- **1900**: Divisible by 100 but not by 400 → **Not a leap year** ✗
- **2023**: Not divisible by 4 → **Not a leap year** ✗

## Approach

1. Check if the year is divisible by 400 (special case - always a leap year)
2. Check if the year is divisible by 100 (century year - not a leap year unless rule 1)
3. Check if the year is divisible by 4 (standard leap year)
4. Return appropriate message

## Solution Logic

The solution uses a compound conditional statement that combines all three rules:
```javascript
year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
```

This expression leverages operator precedence where `&&` is evaluated before `||`, making it equivalent to:
```javascript
(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
```

**Time Complexity:** O(1) - constant time  
**Space Complexity:** O(1) - no additional space needed

## Example Usage

```javascript
isLeapYear(2024);  // Returns: "2024 is a leap year."
isLeapYear(2000);  // Returns: "2000 is a leap year."
isLeapYear(1900);  // Returns: "1900 is not a leap year."
isLeapYear(2023);  // Returns: "2023 is not a leap year."
```
