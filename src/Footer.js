import styled from 'styled-components';

const StyledDIV = styled.div`
    min-height: 10vh;
    display: flex;
    background-color: aliceblue;
    /* align-items: center; */
`

export default function Footer() {
    return (
        <StyledDIV>
            <h1>Footer</h1>
        </StyledDIV>
    );
}