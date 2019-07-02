# WIP

## React Component for show progress bar connected with the scroll.

When you scroll on the page, the bar indicate the progression on the page.

### For include in your project

```jsx
import ScrollProgressBar from 'react-scroll-progress-bar';

...
render() {
  <div>
  <ScrollProgressBar />
  ....
  </div>
}
```

### Props config

You can change parameter with the props :

- backgroundColor (string) : color of the container
- barColor (string) : color of the bar
- height (string) : height of the component.

The props aren't required.

```jsx
import ScrollProgressBar from 'react-scroll-progress-bar';

...
render() {
  <div>
  <ScrollProgressBar
    backgroundColor="#CCC"
    barColor="#FFCC00"
    height="5px"
  />
  ....
  </div>
}
```
