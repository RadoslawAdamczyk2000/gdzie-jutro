import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
    }
    ::after,
    ::before{
        content:'';
        position:absolute;
    }
    a{
        color:inherit;
        outline:none;
        text-decoration:none;
    }
    body{
        font-family: 'Quicksand', sans-serif;
        font-size:1.6rem;
    }
    button{
        all:unset;
        cursor:pointer;
    }
    html{
        font-size:62.5%;
    }
    input{
        all:unset;
    }
    li,
    ol,
    ul{
        list-style:none;
    }
`