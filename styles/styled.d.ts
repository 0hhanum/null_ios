import "styled-components/native";

declare module "styled-components/native" {
  interface IVariable {
    fontSize: {
      small: number;
      medium: number;
      large: number;
    };
    layoutPadding: number;
  }
  interface IColors {
    JS: string;
    TS: string;
    React: string;
  }
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    headerColor: string;
    red: string;
    yellow: string;
    green: string;
    colors: IColors;
    variables: IVariable;
  }
}
