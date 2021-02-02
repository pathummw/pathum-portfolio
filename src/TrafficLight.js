import styled, { css } from "styled-components";


export default function TrafficLight() {
    return (
        <div>
            <SingleLight redLight />
            <SingleLight yellowLight />
            <SingleLight greenLigt />
        </div>
    );
}

const SingleLight = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: flex;
    margin: 5px;
    background-color: grey;

    ${props =>
        props.redLight &&
        css`
        background-color: #FF0909;
        `};

    ${props =>
        props.yellowLight &&
        css`
    background-color: #FAFF09;
    `};

    ${props =>
        props.greenLigt &&
        css`
    background-color: #17CD34;
    `};
`
