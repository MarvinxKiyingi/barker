export const isDesktop = () => {
  const desktopScreenSize = window.matchMedia('(min-width: 600px)');
  //   console.log(desktopScreenSize.matches);
  return desktopScreenSize.matches;
};
