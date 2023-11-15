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
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    headerColor: string;
    questionTextColor: string;
    borderColor: string;
    red: string;
    yellow: string;
    green: string;
    warning: string;
    variables: IVariable;
    width: number;
    height: number;
    widthRatio: number;
    heightRatio: number;
  }
}
