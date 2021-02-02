import TopicComponent from "./TopicComponent";
import styled from 'styled-components';

const StyledDIV = styled.div`
    min-height: 100vh;
`

export default function Mywork() {
    return (
        <StyledDIV id="myWork">
            <TopicComponent topic="My work" alignLight="left" />
        </StyledDIV>

    );
}