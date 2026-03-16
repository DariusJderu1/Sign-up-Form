# Sign-Up Form

A static sign-up form page built with HTML, CSS, and vanilla JavaScript. It features a custom user interface, client-side form validation, and real-time password matching feedback.

**Live Demo:** [https://dariusjderu1.github.io/Sign-up-Form/](https://dariusjderu1.github.io/Sign-up-Form/) 

## Technologies Used

* **HTML5:** Semantic form structure utilizing native validation attributes (`required`, `minlength`, `maxlength`, `pattern`).
* **CSS3:** Flexbox for layout management, custom styling for form inputs, and hover/focus states.
* **JavaScript:** Real-time DOM manipulation to display error messages and validate password matching requirements.

## Features

* **Client-Side Validation:** Ensures users provide valid email formats, correct phone number patterns, and meet minimum password length requirements before submission.
* **Real-Time Password Check:** JavaScript dynamically checks if the "Password" and "Confirm Password" fields match, providing instant visual feedback.
* **Form Submission:** Configured to send a POST request to a mock API (`httpbin.org/post`) to demonstrate successful data transmission.