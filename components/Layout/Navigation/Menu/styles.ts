import styled, { css } from 'styled-components';
interface menuButton {
    active:boolean;
}
export const MenuButtonWrapper = styled.div<menuButton>`
    @media only screen {
        @media (max-width:698px){
            align-items:center;
            cursor:pointer;
            display:flex;
            flex-flow:column nowrap;
            height:2.75rem;
            justify-content:space-evenly;
            overflow:hidden;
            position:relative;
            width:2.75rem;
            & > span{
                background-color:${({theme}) => theme.colors.navigation.color};
                height:.25rem;
                opacity:1;
                transition:.12s linear background-color,.12s .12s linear display, .12s linear left,.12s linear opacity, .12s linear top, .12s linear transform, .12s linear visibility;
                visibility:visible;
                width:100%;
            }
            ${({active}) => active && css`
                & > span{
                    left:50%;
                    position:absolute;
                    top:50%;
                    &:nth-of-type(1){
                        transform:translate(-50%,-50%) rotate(45deg);
                    }
                    &:nth-of-type(2){
                        transform:translate(-50%,-50%) rotate(-45deg);
                    }
                }
                
            `}
        }
    }
`

export const MenuItemWrapper = styled.li`
    a{
        position:relative;
        transition:.2s linear color;
        &::before{
            background:${({theme}) => theme.colors.navigation.hover};
            border-radius:2rem;
            bottom:0;
            height:.25rem;
            left:0;
            transition:.2s linear width;
            width:0%;
        }
        &:focus,
        &:hover{
            color:${({theme}) => theme.colors.navigation.hover};
            &::before{
                width:100%;
            }
        }
    }
    & > div{
        align-items:center;
        display:flex;
        flex-flow:row nowrap;
        justify-content:center;
        & > a{
            align-items:center;
            display:flex;
            font-weight:600;
            font-size:2rem;
            height:3rem;
            justify-content:center;
            padding:0 1rem;
            &::before{
                height:.3rem;
            }
            @media only screen{
                @media (max-width:900px){
                    font-size:1.8rem;
                    height:2.5rem;
                }
            }
        }
        & > .button{
            align-items:center;
            cursor:pointer;
            display:flex;
            font-size:2.85rem;
            height:3rem;
            justify-content:center;
            transition:.2s linear color,.2s linear transform;
            width:3rem;
            &:focus,
            &:hover{
                color:${({theme}) => theme.colors.navigation.hover};
                transform:scale(.95);
            }
            @media only screen{
                @media (max-width:900px){
                    font-size:1.75rem;
                    height:2.5rem;
                    width:2.5rem;
                }
            }
        }
    }

    &.expand{
        position:relative;
        & > ul{
            align-items:start;
            background-color:${({theme}) => theme.colors.navigation.submenu};
            border-radius:0 1.5rem 1.5rem 1.5rem;
            color:${({theme}) => theme.colors.navigation.color};
            display:flex;
            flex-flow:column;
            justify-content:center;
            position:absolute;
            padding:.85rem 1.8rem;
            row-gap:.35rem;
            @media only screen{
                @media (max-width:400px){
                    border-radius:1.25rem;
                    max-width:99%;
                    padding:1.25rem 1.2rem;
                    position:relative;
                }
                @media (max-width:220px){
                    padding:1.25rem .85rem;
                }
            }
            & > li{
                max-width:95%;
                width:18rem;
                & > a{
                    font-size:1.8rem;
                    font-weight:500;
                    position:relative;
                    @media only screen{
                        @media (max-width:900px){
                            font-size:1.6rem;
                        }
                    }
                }
            }
        }
    }
`
export const MenuWrapper = styled.menu`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    gap:1.25rem;
    justify-content:center;
    padding:0 2rem;
    @media only screen{
        @media (max-width:900px){
            padding:0 1rem;
        }
        @media (max-width:750px){
            gap:.5rem;
        }
        @media (max-width:400px){
            flex-flow:column;
        }
    }
    
`
