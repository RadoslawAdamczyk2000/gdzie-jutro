import styled from 'styled-components';
export const BrandWrapper = styled.div`
    width:15rem;
    & > a ,
    & > a  > figure{
        height:100%;
        position:relative;
        width:100%;
    }
    & > a{
        transition:.2s linear transform;
        &:focus,
        &:hover{
            transform:scale(.95);
        }
    }
`