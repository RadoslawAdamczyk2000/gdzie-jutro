import styled from 'styled-components';
export const HeroWrapper = styled.header`
    height:calc(98vh - 5.35rem);
    max-height:auto;
    position:relative;
    & > div,
    & > div > div > section{
        align-items:center;
        display:flex;
        justify-content:center;
    }

    @media only screen {
        @media (min-width:1450px){
            height:calc(95vh - 5.35rem);
        }
        @media (max-width:950px){
            height:calc(95vh - 5.35rem);
        }
    }

    & > div{
        height:100%;
        & > figure{
            height:100%;
            position:relative;
            width:100%;
        }
        & > div{
            align-items:start;
            background-color:${props => props.theme.colors.page.hero};            
            color:${props => props.theme.colors.page.background};
            display:flex;
            justify-content:start;
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            & > section{
                align-items:start;
                cursor:default;
                flex-flow:column;
                padding:1rem 2rem 3rem; 
                row-gap:2rem;
                @media only screen {
                    @media (max-width:650px){
                        padding:1rem .85rem 1.5rem; 
                        row-gap:2rem;
                    }
                }
                & > h1{
                    font-size:3.6rem;
                    font-weight:500;
                    @media only screen {
                        @media (max-width:750px){
                            font-size:2.85rem;
                        }
                        @media (max-width:650px){
                            text-align:center;
                        }
                        @media (max-width:450px){
                            font-size:2.55rem;
                        }
                        @media (max-width:320px){
                            font-size:2.25rem;
                        }
                    }

                }
                & > div{
                    padding: 0 1rem;
                    position:relative;
                    @media only screen {
                        @media (max-width:650px){
                            margin:auto;
                        }
                    }   
                    & > a {
                        align-items:center;
                        background-color:${props => props.theme.colors.page.background};
                        border-radius:3rem;
                        color:${props => props.theme.colors.page.color};
                        display:flex;
                        font-size:1.8rem;
                        font-weight:600;
                        justify-content:center;
                        padding:1.25rem 2rem;
                        position:relative;
                        transition:.15s linear background-color,.15s linear transform;
                        z-index:1;
                        &:focus,
                        &:hover{
                            background-color:${props => props.theme.colors.page.primary};
                            transform:scaleX(.95);
                        }
                        @media only screen {
                            @media (max-width:650px){
                                font-size:1.65rem;
                                padding:1.15rem 1.8rem;
                            }
                        } 
                    }
                }
            }
        }
    }
`