# patterns-methodologies
Exercises for securityqa.ca/posts/methodologies-and-design-patterns/

## What is this?

This exercise corresponds with the lesson in which we learned 
- the BEM CSS methodology, and 
- JavaScript classes. There are tests in Github to check whether your code is using both of these.

## How do I do this?

Change the code in the following files:

- `/public/form.css`
- `/public/index.html`

There are code comments in both these files that will help you pass the tests that get executed when you push your code to Github.

To pass the CSS test, the CSS in `/public/form.css` must be re-written in BEM format, with the base element keeping the name `.form`.

To pass the JavaScript test, the code contained in the script element at the bottom of `/public/index.html` must be re-written to have a JavaScript class called `Character`. Then, you must rewrite the `defaultCharacter` and `newCharacter` objects so that they are instances of the `Character` class. Keep everything else the same.

---

Note:

The tests are written out in `/test/script.test.js`. Feel free to read that file if it's going to help you understand what's required.
