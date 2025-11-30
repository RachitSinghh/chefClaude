# Props

Props refers to the properties being passed into a component in order for it to work correctly, similar to how a function recieves parameters: "from above." A component reciving props is not allowed to modify those props. (I.e. They are immutable.")

# State

State refers to values that are managed by the component, similar to variables declared inside a function. Any time you have changing values that should be saved/displayed, you'll likely be using state

## "View as function of state"

1. Render : React runs your function and dislays whatever gets returned. the function will only be run if (1) it recives new props from above, or (2) its internal state values changes

2. setState : changing a local non-state variable doesn't re-render the component. Changing state with a built-in `setState` function does
3. View = funciton (state) : Thus, when state changes and React re-runs (re-renders) your component, something new gets returned and replaces what used to be a on the page.

## Side Notes for State

- if you ever need the old value of state
- to help you determine the new value of state,
- you should pass a callback function to your
- state setter function instead of using
- state directly. This callback function will
- receive the old value of state as its parameter,
- which you can then use to determine your new
- value of state.

## Quiz

1. You have 2 options for what you can pass in to a state setter function (e.g. `setCount`). what are they?

- Pass the new version of state that we want to use as the replacement for the old version of state
- Pass a callback function. Must return what we want the new value of state to be. Will receive the old version of state as a parameter so we can use it to help determine what we want the new value of state to be.

2. When would you want to pass the first option (from answer above) to the state setter function?

- Whenever we don't really care about (or need) the old value, we simply want to set a new value.

3. When would you want to pass the second option (from answer above) to the state function

- Whenever we do care about the previous value in state and need it to help us determine what the new value should be.

## Complex State: Arrays

```js
const [state, setState] = useState([]);

function addSomething() {
  // Syntax
  `setState(prevState => [...prevState, <new item here>])`;
  // Access the item from the previous array
  // returns the brand new array which includes the previous item from the array and the new item i want
  // we use it when we care about the previous state

  // for example the state could be [1, 2,3,4,5]
  setState((prevState) => [...prevState, "Test"]);
  // [1, 2, 3, 4, 5, "Test"]
}
```

## Complex State: Object

snap shot of working with State - Object

```js
const [contact, setContact] = React.useState({
  firstName: "John",
  lastName: "Doe",
  phone: "+1 (212) 555-1212",
  email: "itsmyrealname@example.com",
  isFavorite: false,
});
let starIcon = contact.isFavorite ? starFilled : starEmpty;

function toggleFavorite() {
  setContact((prevContact) => {
    return {
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    };
  });
}
```

## conditional Rendering

1. What is `conditional rendering`?

- When we want to only sometimes display something on the page based on some kind of condition.

2. When would you use && ?

- When you want to either display something or NOT display someting.

3. When would you use a ternary ?

- when you need to decide which of 2 things to display

4. What if you need to decide between > 2 options on what to display

- if...else if...else conditional or maybe a `switch` statment

## some questions and answers

### 1. Think about where the recipe response should live and how you're

- going to make sure it doesn't disappear between each state change in
- the app. (I don't mean between refreshes of your mini-browser.
- You don't need to save this to localStorage or anything more permanent
- than in React's memory for now.)
  1.  It's should be intializaed as contextAPi or any other relevant place which is supposed to be statemanagemnet
  2.  to make sure it doesn't disappear either we should place it in most top parent component in a parent component or a global store so the child components can read/write without resetting.

### 2. What action from the user should trigger getting the recipe?

      1. User should enter all the ingridents
      2. then as soon as user clicks on the get a recipe button it should be able to render the recipe
