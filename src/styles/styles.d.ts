import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: "light" | "dark";

    colors: {
      primary: string;
      secondary: string;
      error: string;
      success: string;
    };
    fontSize: {
      sm: string;
      md: string;
      lg: string;
    };
    bgColor: string;
    filter: string;
    textShadow: string;
  }
}
