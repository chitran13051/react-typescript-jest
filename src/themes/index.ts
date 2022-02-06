import { DefaultTheme } from "styled-components";

// declare module "styled-components" {
//   export interface DefaultTheme {
//     maxPadding: string;
//   }
// }
export const myTheme: DefaultTheme = {
  maxPadding: "20px",
  color: {
    warning: "black",
  },
};

// Re-export, re-factor

export * from "./button";
