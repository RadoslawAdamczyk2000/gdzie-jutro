import styled from 'styled-components';
export const Articles = styled.ul`
    &.home{
        align-items:start;
        display:flex;
        flex-flow:row wrap;
        justify-content:center;
        gap:1rem;
        padding:.75rem 1rem;
        @media only screen {
            @media (max-width:720px){
                flex-flow:row;
                justify-content:start;
                overflow-x:scroll;
            }
        }
    }
`
export const ArticleWrapper = styled.li`
    &.home{
        flex-shrink:0;
        width:40rem;
        @media only screen {
            @media (max-width:1050px){
                width:35rem;
            }
            @media (max-width:950px){
                width:30rem;
            }
            @media (max-width:720px){
                width:25rem;
                max-width:99%;
            }
        }
        & > a{
            align-items:center;
            display:flex;
            flex-flow:column;
            height:100%;
            justify-content:center;
            &,
            & > * {
                width:100%;
            }
            & > div{
                aspect-ratio:16/9;
                position:relative;
                overflow:hidden;
                & > figure{
                    filter:brightness(95%);
                    height:100%;
                    transition:.15s linear filter,.15s linear transform;
                    width:100%;
                }
            }
            & > figcaption{
                background-color:${({theme}) => theme.colors.page.background};
                padding:.25rem .5rem;
                & > h3{
                    color:${({theme}) => theme.colors.page.color};
                    font-size:1.95rem;
                    font-weight:900;
                    padding:.25rem .5rem;
                    text-align:center;
                }
                & > p{
                    color:${({theme}) => theme.colors.page.secondary};
                    font-size:1.65rem;
                    line-height:calc(1.85 * 1.65rem);
                    padding:.45rem;
                }
            }
        }
        &:focus,
        &:hover{
            & > a{
                & > div{
                    & > figure{
                        filter:brightness(120%);
                        transform:scale(1.12);
                    }
                }
            }
        }
    }
`
