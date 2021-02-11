import TopicComponent from "./TopicComponent";
import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { COLORS } from './Colors';

const StyledDIV = styled.div`
    
    min-height: 65vh;
    display: flex;
    justify-content: center;
    img{
        height:70px;
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
    div{
        display:flex;
        align-items: center;
        justify-content: center;
        height: 20px;
        width: 100vw;
        margin: 0;
    }

    footer{
        height: 5vh;
        display: flex;
    }

    @media screen and (max-width: 730px){
        li{
        font-size: 40px;
        margin: 0 15px;
        }
    }
    @media screen and (max-width: 450px){
        min-height: 70vh;
        li{
        font-size: 40px;
        margin: 0 10px;
        }
    }

    //Galaxy fold
    @media screen and (max-width: 280px){
        min-height: 65vh;
    }
`


export default function Contact() {
    return (
        <div id="contact" >
            <TopicComponent topic="Contact" alignLight="right" />
            <StyledDIV >
                <ul>
                    <li><a href="mailto:pathummw@yahoo.com"><FaEnvelope /></a></li>
                    <li><a href="https://github.com/pathummw"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/pathum-weerathunga-87248a56"><FaLinkedin /></a></li>
                    <li><a href="http://digican.se/"><FaDesktop /></a></li>
                </ul>

            </StyledDIV>
        </div>

    );
}
