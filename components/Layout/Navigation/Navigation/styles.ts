import styled from 'styled-components';
export const NavigationWrapper = styled.nav`
    background-color:${({theme}) => theme.colors.navigation.background};
    color:${({theme}) => theme.colors.navigation.color};
    display:flex;
    position:sticky;
    top:0;
    &.desktop{
        height:5.35rem;
        justify-content:space-between;
        padding:0 2rem;
        & > div{
            align-items:center;
            display:flex;
            justify-content:center;
        }
        @media only screen{
            @media (min-width:1450px){
                height:6rem;
            }
            @media (max-width:950px){
                padding:0 .85rem;
            }
            @media (max-width:698.5px){
                display:none;
            }
        }
    }
    &.mobile{
        flex-flow:column;
        padding:.35rem .25rem;
        row-gap:1rem;
        & > div{
            align-items:center;
            display:flex;
            justify-content:center;
            &:first-of-type{
                flex-flow:row nowrap;
                justify-content:space-between;
                position:relative;
                padding:0 .45rem;
            }
        }
        @media only screen{
            @media (min-width:699px){
                display:none;
            }
        }
    }
`