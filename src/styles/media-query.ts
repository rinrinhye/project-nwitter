export const BREAKPOINT_SM = 'sm';
export const BREAKPOINT_MD = 'md';
export const BREAKPOINT_LG = 'lg';

export const breakpoints = {
  md: '768',
  lg: '1200'
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return `@media (min-width: ${breakpoints[key]}px)`;
};
