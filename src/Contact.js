import TopicComponent from "./TopicComponent";

import styled, { css } from "styled-components";
import Signature from './img/signature.png';
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { COLORS } from './Colors';

const StyledDIV = styled.div`
    
    height: 75vh;
    position: relative;
    display: flex;
    justify-content: center;
    img{
        height:70px;
        position: absolute;
        right: -200px;
        bottom:-5px;
    }
    ul{
        list-style: none;
        display: flex;
        margin-top: 20vh;
    }
    li{
        font-size: 70px;
        margin: 0 30px;
        
    }
    a{
        color: ${COLORS.GOLD};
        text-decoration: none;
        transition: ease-in-out 0.3s;
    }
    a:hover{
        font-size: 80px;
        transition: ease-in-out 0.2s;
    }
    @media screen and (max-width: 730px){
        /* flex-direction: column; */
    }
`


export default function Contact() {
    return (
        <div id="contact" >
            <TopicComponent topic="Contact" alignLight="right" />
            <StyledDIV >
                {/* <h2>Click here to contact me...</h2>
                <h1>My github</h1> */}
                <ul>
                    <li><a href="mailto:pathummw@yahoo.com"><FaEnvelope /></a></li>
                    <li><a href="https://github.com/pathummw"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/pathum-weerathunga-87248a56"><FaLinkedin /></a></li>
                    <li><a href="http://digican.se/"><FaDesktop /></a></li>
                </ul>
                <img src={Signature} alt="" />
            </StyledDIV>
        </div>

    );
}
