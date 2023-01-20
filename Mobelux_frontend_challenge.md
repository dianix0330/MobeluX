# Objective
Build a website that consumes JSON from a RESTful API and render text and images.

Visual Reference
https://www.figma.com/file/fMz29WOQAWV0nmFBNJXmNI/Dev-Challenge

API and Rendering
Fetch and display the first 12 results from https://jsonplaceholder.typicode.com/albums in a grid. Each grid item should display the value of `title`.

When the user clicks the album grid item, transition to a new grid that fetches and displays the first 15 results from https://jsonplaceholder.typicode.com/albums/{album_id}/photos in a grid. Each grid item should display the value of `title` and image data loaded from `thumbnailUrl`

When the user clicks an image grid item, present a modal displaying image data loaded from `url`.

## Technical Details
Language/Framework: React
Styles: Prefer Sass/Scss
Browser Compatibility: Consistent rendering and behavior across Safari, Chrome, and Firefox + responsiveness

## Helpful Info
Please use the visual reference as a starting point, the level of fidelity we're expecting is a working prototype. We're looking for software development best practices and architecture. Imagine this app at a larger scale. How should it be built to easily add features and more views?

## Bonus Frontend Criteria (optional)
We consider functionality to be the #1 priority of this challenge, but if you want to show off any frontend skills you are passionate about, feel free to choose one of the optional bonus measures below to implement, or include your own bonus criteria (just be sure to leave a note / comment about what it is and why you picked it!)
- Enhance the visual style and interactivity to add more creativity or a more polished UX to the project
- Write your own passing test cases to validate your code
- Leave a README or a commented write-up (a paragraph or bulleted list) on how you'd plan and implement next steps if the intention was to scale this up to a large production-quality project - what would your priorities and considerations be?

Please use Git to track your work. When delivering code, please send a link to the hosted repo.

Please ask any questions that may be helpful in completing this challenge.