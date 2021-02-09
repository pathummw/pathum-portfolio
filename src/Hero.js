import styled, { css } from 'styled-components'
import TopicComponent from './TopicComponent'
import ProfileImage from "./img/profile.jpg";

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

        @media screen and (max-width: 730px){
            h1{
                font-size: 1em;
            }
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

    const ImageDIV = styled.div`
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            position: absolute;
            top: 20px;
            left: 20px;
            object-fit: cover;
            border: solid 3px #D1AD54;
            transition: ease-in-out 1s;
            /* z-index: -5; */
        }

        img:hover{
            width: 250px;
            height: 250px;
            /* transition: 1s; */
            transition: ease-in-out .5s; 
            /* border: solid 5px #D1AD54; */
        }
    `

    return (
        <HeroContainer id="home">


            <h3>I am</h3>
            <h1>Pathum</h1>
            <h1>Weerathunga</h1>
            <h3>Front end developer </h3>     {/* I can your &lt;www /&gt;... */}

            <ImageDIV>
                {<img src={ProfileImage} alt="Pathum profile picture" />}
            </ImageDIV>


            {/* <TopicComponent topic="Skills" alignLight="right" />
            <TopicComponent topic="My work" alignLight="left" /> */}
        </HeroContainer>
    )
}
