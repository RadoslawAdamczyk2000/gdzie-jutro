import styled from 'styled-components';
export const HeroWrapper = styled.header`
    height:62rem;
    position:relative;
    & > section,
    & > section > figure{
        position:relative;
        height:100%;
        width:100%;
    }
    & > section {
        & > div{
            background-color:red;
            position:absolute;
            top:50%;
            left:2rem;
            transform:translateY(-50%);
            width:54rem;
        }
    }
`