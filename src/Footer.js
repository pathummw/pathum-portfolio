import styled from 'styled-components';
import Signature from './img/signature.png'

const StyledDIV = styled.span`
    min-height: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
        height: 75px;
    }
`

export default function Footer() {
    return (
        <StyledDIV>
            <footer><img src={Signature} alt="Signature of Weerathunga" /></footer>
        </StyledDIV>
    );
}