import styled from 'styled-components';
export const ArticleWrapper = styled.li`
    &.home{
        background:silver;
        width:40rem;
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
                background-color:${({theme}) => theme.colors.page.secondary}
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