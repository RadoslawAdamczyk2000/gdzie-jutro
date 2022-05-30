import styled from 'styled-components';
export const AboutWrapper = styled.article`
    display:grid;
    grid-template-columns:1.5fr 2fr;
    @media only screen {
        @media (max-width:1050px){
            grid-template-columns:1.5fr 1.4fr;
        }
        @media (max-width:1000px){
            align-items:start;
            display:flex;
            flex-flow:row wrap-reverse;
            gap:1rem 2rem;
            justify-content:center;
        }
    }
    & > figure{
        aspect-ratio:4/3;
        background-color:${({theme}) => theme.colors.page.hero};
        border-radius:2rem;
        margin:auto;
        position:relative;
        padding:2rem;
        max-width:99%;
        width:45rem;
        @media only screen {
            @media (min-width:1450px){
                width:65rem;
            }
        }
    }
    & > section {
        align-items:flex-start;
        /* background:orange; */
        display:flex;
        flex-flow:column;
        justify-content:start;
        @media only screen {
            @media (max-width:1000px){
                max-width:99%;
                width:65rem;
            }
        }
        & > h2{
            font-size:3.25rem;
            color:${({theme}) => theme.colors.page.tertiary};
            @media only screen {
                @media (min-width:1450px){
                    font-size:4.8rem;
                }
                @media (max-width:500px){
                    font-size:2.85rem;
                }
                @media (max-width:400px){
                    text-align:center;
                }
                @media (max-width:200px){
                    font-size:2.45rem;
                }
            }
        }
        & > p{
            color:${({theme}) => theme.colors.page.secondary};
            font-size:1.95rem;
            font-weight:600;
            line-height:calc(1.95rem * 1.9);
            padding:1.1rem;
            @media only screen {
                @media (min-width:1450px){
                    font-size:2.2rem;
                    line-height:calc(2.2rem * 2.1);
                }
                @media (max-width:500px){
                    font-size:1.65rem;
                    font-weight:500;
                    line-height:calc(1.65rem * 1.9);
                    text-align:justify;
                }
            }

        }
    }
`