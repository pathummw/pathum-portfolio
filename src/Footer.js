import styled from 'styled-components';
import ParticlesBg from 'particles-bg';

const StyledDIV = styled.div`
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: aliceblue; */
    /* align-items: center; */
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
            <h1>Footer</h1>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Github</li>
                <li>Mail</li>

            </ul>
        </StyledDIV>
    );
}