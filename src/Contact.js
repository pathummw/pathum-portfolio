import TopicComponent from "./TopicComponent";

import styled, { css } from "styled-components";

const StyledDIV = styled.div`
    /* display:flex; */
    min-height: 100vh;
    /* color: #716D6D; */
    /* h2{
        font-weight: 400;
        font-size: 2.5em;
    }
    h3{
        font-weight: 300;
        font-size: 2em;
    } */
`


export default function Contact() {
    return (
        <StyledDIV id="contact" >
            <TopicComponent topic="Contact" alignLight="right" />
            <h2>Contact component</h2>

        </StyledDIV>
    );
}