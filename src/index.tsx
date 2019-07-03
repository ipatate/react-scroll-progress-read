import * as React from "react";
import { fixed, getScrollPage, outerHeight } from "./utils";

interface IScrollProgressProps {
  /** background of container */
  backgroundColor?: string,
  /** color of bar */
  barColor?: string,
  /** height of progress bar */
  height?: string,
  /** ID of target container */
  target?: string
}

const ScrollProgressRead: React.FC<IScrollProgressProps> = (
  {
    backgroundColor,
    height,
    barColor,
    target
  }
) => {
  const targetContainer = target ? document.getElementById(target) : null;
  // update bar width
  const [scrolled, setScrolled] = React.useState("0%");
  // listen scroll
  React.useEffect(() => {
    updatePos();
    window.addEventListener("scroll", updatePos);
    return () => window.removeEventListener("scroll", updatePos);
  });
  // update width with scroll position
  const updatePos = () => {
    let elementHeight = 0;
    let startTop = 0;
    // scroll
    const scrollPx = getScrollPage();
    // if targeted element
    if (targetContainer) {
      // element height
      elementHeight = outerHeight(targetContainer) -
        document.documentElement.clientHeight;
      startTop = targetContainer.offsetTop;
    } else {
      // window height
      elementHeight = document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    }
    // remove difference between top window and element
    const _t = fixed(scrollPx - startTop);
    // if before element position when target is element
    if (scrollPx < startTop && scrolled !== "0%") {
      return setScrolled("0%");
    }

    if (_t > elementHeight && scrolled !== "100%") {
      return setScrolled("100%");
    }
    // position scroll
    const _p = fixed(_t / elementHeight);
    // percentage for css
    const pos = `${fixed(_p * 100)}%`;
    // update scroll
    setScrolled(pos);
  };
  // style for container
  const containerStyle = {
    background: backgroundColor,
    height,
    width: "100vw"
  };
  // style for bar
  const barStyle = {
    height,
    background: barColor,
    width: scrolled
  };
  return (
    <div style={containerStyle}>
      <div style={barStyle} />
    </div>
  );
};

ScrollProgressRead.defaultProps = {
  backgroundColor: "#CCC",
  height: "5px",
  barColor: "#e91e63"
};

export default ScrollProgressRead;
