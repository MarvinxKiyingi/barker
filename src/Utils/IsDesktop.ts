export const isDesktop = () => {
  const desktopScreenSize = window.matchMedia('(min-width: 900px)');
  return desktopScreenSize.matches;
};
