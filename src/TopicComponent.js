import styled, { css } from "styled-components";
import TrafficLight from "./TrafficLight";


const StyledDiv = styled.div`
    display: flex;
    align-items: baseline;

    flex-direction: row;
    ${props =>
        props.alignLight === "right" &&
        css`
        flex-direction: row-reverse;
        `
    };
    
    justify-content: left;
    ${props =>
        props.alignLight === "right" &&
        css`
    justify-content: right;
    `};



    h1{
        font-size: 5em;
        font-weight: 700;
    }

    @media screen and (max-width: 730px){
        justify-content: center;
            h1{
                font-size: 4em;
            }
        }

    @media screen and (max-width: 280px){  
        h1{
            font-size: 3em;
        }
    }
`

export default function Topic(props) {
    return (
        <StyledDiv alignLight={props.alignLight}>
            <TrafficLight />
            <h1>{props.topic}</h1>
        </StyledDiv>
    )
}
