export const changeColor = () => {
  return Math.floor(Math.random() * 10) % 2 === 0 ? "black" : "pink";
};

export const getBackgroundColor = (breakpoint = window.innerWidth) => {
  //if breakpoint changed => bgColor change in order from sm-md-lg : yellow-red-green
  if (breakpoint < 600) {
    return "yellow";
  }
  if (breakpoint > 1000) {
    return "green";
  }
  return "red";
};
