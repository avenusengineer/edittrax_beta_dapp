export const disableScroll = () => {
  (window as any).scrollTo(0, 0);
  // Get the current page scroll position
  let scrollTop = (window as any).pageYOffset || document.documentElement.scrollTop;
  let scrollLeft = (window as any).pageXOffset || document.documentElement.scrollLeft;
  // if any scroll is attempted,
  // set this to the previous value
  (window as any).onscroll = function() {
    (window as any).scrollTo(scrollLeft, scrollTop);
  };
}
export const enableScroll = () => {
  (window as any).onscroll = function() {};
}

export const scrollTop = () => {
  (window as any).scrollTo(0, 0);
}
