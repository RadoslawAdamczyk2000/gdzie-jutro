import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors:{
        background:string;
        color:string;
        navigation:{
            background:string;
            color:string;
            hover:string;
            submenu:string;
        },
        page:{
            background:string;
            color:string;
            hero:string;
            primary:string;
            secondary:string;
            tertiary:string;
        }
    }
  }
}