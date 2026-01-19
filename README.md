# exo_s3_190126
# JavaScript Project - Basic Exercises (claude ia)

## Description
This project contains JavaScript exercises to learn the basics of web programming, including string manipulation, calculations, and data analysis.

## Project Structure

```
EXO_S3_190126/
├── lib/
│   ├── script_1a.js    # First name exercise
│   ├── script_1b.js    # First name exercise variant
│   ├── script_2.js     # Factorial calculation
│   ├── script_3.js     # Pyramid display
│   └── script_4.js     # Entrepreneur data analysis
├── index.html          # Main HTML page
└── README.md           # This file
```

## Exercises

### Script 1 - Hello First Name
**Files:** `script_1a.js` and `script_1b.js`

This script asks for the user's first name and displays a welcome message.

**Features:**
- Asks for first name via a prompt
- Displays "Hello, [first name]!" in the console
- Displays the message on the HTML page

### Script 2 - Factorial Calculation
**File:** `script_2.js`

This script calculates the factorial of a number entered by the user.

**Features:**
- Asks for a number via a prompt
- Calculates the factorial using a function
- Displays the result in the console

**Examples:**
- factorial(4) = 24
- factorial(5) = 120
- factorial(10) = 3628800

### Script 3 - Pyramid Display
**File:** `script_3.js`

This script creates and displays a pyramid made of a specific character.

**Features:**
- Asks for the number of levels via a prompt
- Asks for the character to use
- Builds the pyramid with proper spacing
- Displays the pyramid in the console

**Example (5 levels with '#'):**
```
    #
   ###
  #####
 #######
#########
```

### Script 4 - Startup Nation (Data Analysis)
**File:** `script_4.js`

This script analyzes data from a list of famous American entrepreneurs.

**Features:**
- Filters entrepreneurs born in the 1970s
- Extracts full names (first and last)
- Calculates the current age of each entrepreneur
- Sorts entrepreneurs alphabetically by last name

**Data analyzed:**
- 18 famous entrepreneurs
- Birth years ranging from 1901 to 1990
- Includes Steve Jobs, Bill Gates, Elon Musk, Mark Zuckerberg, and more

## How to Use

1. Open the `index.html` file in your browser
2. The active script will run automatically
3. Follow the instructions in the prompts (for scripts 1, 2, and 3)
4. Check the console (F12) to see the results

## Switching Scripts

In `index.html`, modify the script line:

```html
<!-- To test script_1a.js -->
<script src="lib/script_1a.js"></script>

<!-- To test script_2.js -->
<script src="lib/script_2.js"></script>

<!-- To test script_3.js -->
<script src="lib/script_3.js"></script>

<!-- To test script_4.js -->
<script src="lib/script_4.js"></script>
```

## Technologies Used

- HTML5
- JavaScript (Vanilla)
- Array methods (map, filter, sort)
- ES6+ features

## Key Concepts Covered

- **Variables and Data Types**: strings, numbers, arrays, objects
- **Functions**: declaration, parameters, return values
- **Loops**: for loops, while loops
- **Conditionals**: if/else statements
- **Array Methods**: map(), filter(), sort()
- **String Manipulation**: concatenation, template literals
- **User Interaction**: prompt(), console.log()

## Author

Exercises completed as part of JavaScript learning

## Notes

- All JavaScript scripts are in the `lib/` folder
- Open the browser console (F12) to see messages
- Prompts appear automatically when the page loads (scripts 1, 2, 3)
- Script 4 runs automatically and displays results in the console