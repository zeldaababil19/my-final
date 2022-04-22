import {
  extendTheme,
  theme as defaultTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react';
import {brandh, ya theme} from './colord'

const Input = {
  defaultProps: {
    variant: 'filled',
  },
};

const Button = {
  baseStyle: {
    borderRadius: '4px',
  },
};

const theme = extendTheme(
  {
    components: {
      Input,
      Button,
    },
    fonts: {
      body: `'Inter',${defaultTheme.fonts.body}`,
      heading: `'Inter'.${defaultTheme.fonts.heading}`,
    },
    colors: { brand, dark },
    style: {
      global: () => ({
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          color: 'dark.900',
        },
      }),
    },
  },
  withDefaultColorScheme({ colorScheme: 'brand' })
);

export default theme;
