import styled from 'styled-components';
export const SocialWrapper = styled.li`
    & > a{
        align-items:center;
        background-color:${({theme}) => theme.colors.navigation.color};
        border-radius:.45rem;
        color:${({theme}) => theme.colors.navigation.submenu};
        display:flex;
        font-size:2rem;
        height:3.1rem;
        justify-content:center;
        transition:.12s linear color;
        width:3.1rem;
        & > *{
            transition:.12s linear transform;
        }
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.navigation.background};
            & > *{
                transform:scale(1.15);
            }
        }
    }
`
export const SocialsWrapper = styled.ul`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    gap:.65rem;
    justify-content:center;
    padding:0 1rem;
`