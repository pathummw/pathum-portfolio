import styled from 'styled-components';
import ParticlesBg from 'particles-bg';
import Signature from './signature.png'

const StyledDIV = styled.span`
    min-height: 10vh;
    /* display: flex;
    align-items: center;
    justify-content: flex-end; */
    /* background-color: aliceblue; */
    /* align-items: center; */
    /* position: absolute;
    left: 10px;
    bottom: 10px; */
    background-color: red;

    img{
        height:100px;
        position: absolute;
        right: 600px;
        bottom: 600px;
    }
    ul{
        display: flex;
        list-style: none;
    }
    li{

    }
`

export default function Footer() {
    return (
        <StyledDIV>
            <img src={Signature} alt="" />
            {/* <h1>Footer</h1>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Github</li>
                <li>Mail</li>

            </ul> */}
        </StyledDIV>
    );
}