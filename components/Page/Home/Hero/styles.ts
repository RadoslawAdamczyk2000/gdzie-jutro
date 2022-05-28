import styled from 'styled-components';
export const HeroWrapper = styled.header`
    height:68rem;
    max-height:auto;
    position:relative;
    & > div,
    & > div > div > section{
        align-items:center;
        display:flex;
        justify-content:center;
    }


    & > div{
        height:100%;
        & > figure{
            height:100%;
            position:relative;
            width:100%;
        }
        & > div{
            display:grid;
            grid-template-columns:2.5fr 3fr;
            height:100%;
            position:absolute;
            width:100%;
            padding:1rem 1rem 1rem 3rem;
            & > section{
                align-items:flex-start;
                background-color:orange;
                flex-flow:column;
                row-gap:2.5rem;
                height:100%;
                & > h1{
                    background-color:pink;
                    font-size:3.4rem;
                    font-weight:500;
                    line-height:calc(3.4rem * 1.8);
                }
                & > div{
                   background:silver;
                   display:flex;
                   justify-content:flex-end;
                   padding:0 1rem;
                   width:100%;
                   & > a{
                       background-color:aqua;
                       border-radius:3rem;
                       font-size:2.4rem;
                       padding:1rem 1.85rem;
                   }
                }
            }
        }
    }
`