import TopicComponent from "./TopicComponent";

import styled, { css } from "styled-components";
import Signature from './signature.png';
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";

const StyledDIV = styled.div`
    
    height: 75vh;
    position: relative;
    display: flex;
    /* align-items: center; */
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
        color: #D1AD54;
        text-decoration: none;
        transition: ease-in-out 0.3s;
    }
    a:hover{
        font-size: 80px;
        transition: ease-in-out 0.2s;
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
                    <li><a href=""><FaDesktop /></a></li>
                </ul>
                <img src={Signature} alt="" />
            </StyledDIV>
        </div>

    );
}
