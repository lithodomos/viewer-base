interface IPalette {
  main: string;
  contrastColor: string;
}

export interface ITheme {
  palette: {
    brand: IPalette;
    common: {
      black: string;
      white: string;
    };
    highlight: IPalette;
    primary: IPalette;
    secondary: IPalette;
  };
}

export interface IBanner {
  coverImageURL: string;
  title: string;
  subtitle: string;
  text: string;
  height: string;
  maxHeight: string;
}

export interface ILogo {
  url: string;
  text: string;
}
