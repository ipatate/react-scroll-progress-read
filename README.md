# WIP

## React Component for show progress bar connected with the scroll.

When you scroll on the page, the bar indicate the progression on the page.

example: [https://react-yj7ccf.stackblitz.io](https://react-yj7ccf.stackblitz.io)

### For include in your project

```jsx
import ScrollProgressRead from 'react-scroll-progress-read';

...
render() {
  <div>
  <ScrollProgressRead />
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
import ScrollProgressRead from 'react-scroll-progress-read';

...
render() {
  <div>
  <ScrollProgressRead
    backgroundColor="#CCC"
    barColor="#FFCC00"
    height="5px"
  />
  ....
  </div>
}
```
