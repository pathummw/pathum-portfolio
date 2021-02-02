import styled, { css } from 'styled-components'
import TopicComponent from './TopicComponent'

export default function Hero() {

    const HeroContainer = styled.div`
        /* display: flex; */
        /* background-color: indigo; */
        /* align-items: center;
        justify-content: center; */
        font-size: 4em;
        display: flex;
        min-height: 100vh;
        /* align-items: center; */
        /* background-color:  rgba(102, 102, 102, 0.192); */
        justify-content: center;
        flex-direction: column;
        
        &>h1{
            font-size: 1.5em;
            font-weight: 800;
        }

        &>h3{
            font-size: 0.4em;
            font-weight:100; 
            color: #716D6D;
        }
    `
    const Dot = styled.span`
        width: 30px;
        height: 30px;
        background-color: red;
        border-radius: 50%;
        display: inline-block;

        ${props =>
            props.yellowLight &&
            css`
        background-color: yellow;
        `};

        ${props =>
            props.greenLigt &&
            css`
        background-color: green;
        `};
    `

    return (
        <HeroContainer id="home">


            <h3>I am</h3>
            <h1>Pathum</h1>
            <h1>Weerathunga</h1>
            <h3>Front end developer </h3>     {/* I can your &lt;www /&gt;... */}


            {/* <TopicComponent topic="Skills" alignLight="right" />
            <TopicComponent topic="My work" alignLight="left" /> */}
        </HeroContainer>
    )
}
