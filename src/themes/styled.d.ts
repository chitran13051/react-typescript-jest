import { DefaultTheme } from "styled-components";

// By default DefaultThem is empty, so we can extend and overriden it
declare module "styled-components" {
  export interface DefaultTheme {
    maxPadding: string;
  }
}
