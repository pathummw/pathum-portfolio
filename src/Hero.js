import { WiCelsius } from "react-icons/wi";
import styled from 'styled-components'
import ProfileImage from "./img/profile.jpg";
import { COLORS } from './Colors';
import { useState, useEffect } from 'react';
import axios from 'axios';
const url = "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric";



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
        span{
            position: absolute;
            left: 10px;
            bottom: 10px; 
            font-size: 0.2em;
            color: ${COLORS.GOLD};
        }

        @media screen and (max-width: 730px){
            h1{
                font-size: 1em;
            }

        }
        @media screen and (max-width: 450px){
            h1{
                font-size: 0.6em;
            }
        }
        //Galaxy fold
        @media screen and (max-width: 280px){  
            h1{
                font-size: 0.5em;
            }
            h3{
                font-size: 0.3em;
            }
            span{
                font-size: 0.17em;
            }
        }


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

        @media screen and (max-width: 730px){
            img{
                top: 40px;
            }
        }
        
        
    `


export default function Hero() {

    const [data, setData] = useState({ data: null });

    useEffect(async () => {
        const result = await axios(url);
        setData(result)
    }, []);

    return (
        <HeroContainer id="home">


            <h3>I am</h3>
            <h1>Pathum</h1>
            <h1>Weerathunga</h1>
            <h3>Front end developer </h3>     {/* I can your &lt;www /&gt;... */}
            <span><p>From Stockholm</p>{!data.data ? '' : Math.round(data.data.main.temp)}

                {!data.data ? '' : < WiCelsius size={20} />}

            </span>


            <ImageDIV>
                {<img src={ProfileImage} alt="Pathum profile picture" />}
            </ImageDIV>


        </HeroContainer>
    )
}
