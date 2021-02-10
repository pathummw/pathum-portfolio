import styled from 'styled-components';
import Signature from './img/signature.png'

const StyledDIV = styled.span`
    min-height: 10vh;

    img{
        height:100px;
        position: absolute;
        right: 600px;
        bottom: 600px;
    }
`

export default function Footer() {
    return (
        <StyledDIV>
            <img src={Signature} alt="" />
        </StyledDIV>
    );
}