import styled, { css } from "styled-components";
import TrafficLight from "./TrafficLight";


const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    background-color : gray;
    /* width: 80vw; */

    flex-direction: row;
    ${props =>
        props.alignLight == "right" &&
        css`
        flex-direction: row-reverse;
        `
    };
    
    justify-content: left;
    ${props =>
        props.alignLight == "right" &&
        css`
    justify-content: right;
    `};


    /* justify-content: ${props => {
        switch (props.alignLight) {
            case "left":
                return "left";
            case "right":
                return "right";
            default:
                return "left";
        }
    }}; */

    /* flex-direction: ${props => {


        switch (props.alignLight) {
            case "left":
                return "row-reverse";
        }
    }}; */


    

    h1{
        font-size: 5em;
        font-weight: 700;
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
