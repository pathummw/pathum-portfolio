import styled from 'styled-components';
/* import { Link } from "react-router-dom"; */
import { Link, animateScroll as scroll } from "react-scroll";


const StyledNav = styled.nav`
    .active{
        border-bottom: 1px solid white;
    } 

`

const UL = styled.ul`
        display: flex;
        position: fixed;
        /* justify-content: space-around; */
        /* min-height: 8vh; */
        list-style: none;
        /* background-color: #171717; */
        /* align-items: center; */
        justify-content: flex-end;
    `

const StyledLink = styled(Link)`
        text-decoration: none;
        color: #FAFAFA;
        font-weight: 300;
        font-size: 1em;
        padding: 5px 30px;

        &:hover{
            color: yellow;
        }
        &:active{
            /* border-radius: 20px;
            border: 1px solid whitesmoke */
        }
    `

export default function Nav() {
    return (
        <StyledNav>
            <UL>

                <StyledLink
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                >Home</StyledLink>

                <StyledLink
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                >Skills</StyledLink>

                <StyledLink
                    activeClass="active"
                    to="myWork"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                >My work</StyledLink>

                <StyledLink
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                >Contact me</StyledLink>

                {/* <StyledLink to="/"> Home </StyledLink>
                <StyledLink to="/skills"> Skills </StyledLink>
                <StyledLink to="/myWork"> My work </StyledLink>
                <StyledLink to="/contact"> Contact </StyledLink> */}
                {/* <li>Home</li>
                <li>Skills</li>
                <li>My work</li>
                <li>Contact</li> */}
            </UL>
        </StyledNav>
    );
}