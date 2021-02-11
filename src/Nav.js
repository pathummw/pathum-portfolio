import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { COLORS } from './Colors';


const StyledNav = styled.nav`
display:flex;
justify-content: flex-end;
    .active{
        border-bottom: 1px solid ${COLORS.GOLD};
    } 

    @media screen and (max-width: 730px){
            justify-content: center;
        }
    
`

const UL = styled.ul`
        display: flex;
        position: fixed;
        list-style: none;
    `

const StyledLink = styled(Link)`
        text-decoration: none;
        color: ${COLORS.FONT_WHITE};
        font-weight: 300;
        font-size: 1em;
        padding: 5px 30px;
        white-space: nowrap;
        &:hover{
            color: ${COLORS.GOLD};
            transition: 0.5s;
        }

        @media screen and (max-width: 450px){
            font-size: 0.5em;
            padding: 5px 20px;
        }
        //Galaxy fold
        @media screen and (max-width: 280px){  
            font-size: 0.5em;
            padding: 5px 10px;
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

            </UL>
        </StyledNav>
    );
}