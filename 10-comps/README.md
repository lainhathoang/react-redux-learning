### Button

### Accordion

### Dropdown

### Navigation

- In this part, I have learnt how to create navigation system in React from scratch
  1. Creates the navigation context in `navigation.js`
  2. Creates the `NavigationProvider` function
  3. In this `NavigationProvider` function we get `navigate` arrow function, it uses the `pushState()` to change the address link without a full page refresh
  4. The `handler()` arrow function uses to change the current address link (path name) and add the event `popstate` for the back navigation & remove if the user takes a full refresh of this page
