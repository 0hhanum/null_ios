import "styled-components/native";

declare module "styled-components/native" {
  interface IVariable {
    fontSize: {
      small: number;
      medium: number;
      large: number;
    };
  }
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    headerColor: string;
    variables: IVariable;
  }
}
