# Really Good Pizza - Pizza Menu

Really Good Pizza is a simple, intuitive React web application that displays a menu of pizzas. You can browse the list of pizzas available, with visual cues to see which pizzas are currently sold out.

## Components

The application is divided into three main components:

1. **Pizza:** This component renders a list item based on the availability status of the pizza. The availability information is passed down as props from the parent **`Menu`** component. If the pizza is sold out, the item is grayed out and displays "SOLD OUT" as the price. Otherwise, it displays the full content.
2. **Menu:** This component consists of a title, a description, and a `ul` where each `Pizza` component is rendered. The data for this component is pulled from an imported data file and passed down as props to the `Pizza` component.
3. **Footer**: A simple component with some text and a button.

## Tech Stack

The app's layout is created using a combination of CSS Grid and Flexbox, making the app responsive and user-friendly.

## Demo

To see this project in action, check out this [demo](https://pizza-menu.ritabradley.dev/).
