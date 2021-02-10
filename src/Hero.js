import styled, { css } from 'styled-components'
import TopicComponent from './TopicComponent'
import ProfileImage from "./img/profile.jpg";
import { COLORS } from './Colors';

export default function Hero() {

    const HeroContainer = styled.div`

        font-size: 4em;
        display: flex;
        min-height: 100vh;
        justify-content: center;
        flex-direction: column;
        
        &>h1{
            font-size: 1.5em;
            font-weight: 800;
        }

        &>h3{
            font-size: 0.4em;
            font-weight:100;
            color: ${COLORS.FONT_GREY};

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
            border: solid 3px ${COLORS.GOLD};
            transition: ease-in-out 1s;
        }

        img:hover{
            width: 250px;
            height: 250px;
            transition: ease-in-out .5s;
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

        </HeroContainer>
    )
}
