import styled from 'styled-components';
export const NavigationWrapper = styled.nav`
    display:flex;
    position:sticky;
    top:0;
    &.desktop{
        background-color:${({theme}) => theme.colors.navigation.background};
        color:${({theme}) => theme.colors.navigation.color};
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
        }
    }



`