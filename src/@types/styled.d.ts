import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      background: string;
      font: string;
      fontPrimary: string;
    };
  }
}
