import * as React from "react";
import { fixed, getScrollPage } from "./utils";

interface IScrollProgressProps {
  /** background of container */
  backgroundColor?: string,
  /** color of bar */
  barColor?: string,
  /** height of progress bar */
  height?: string
}

const ScrollProgressRead: React.FC<IScrollProgressProps> = (
  {
    backgroundColor,
    height,
    barColor
  }
) => {
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
    // scroll
    const scrollPx = getScrollPage();
    // window height
    const winHeightPx = document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    // position scroll
    const _p = fixed(scrollPx / winHeightPx);
    // percentage for css
    const pos = `${fixed(_p * 100)}%`;
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
