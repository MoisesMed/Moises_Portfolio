import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    backgroundSecondaryColor: string;
    titleColor: string;
    labelColor: string;
    strongColor: string;
  }
}
