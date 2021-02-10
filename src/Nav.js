import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { COLORS } from './Colors';


const StyledNav = styled.nav`
display:flex;
justify-content: flex-end;
    .active{
        border-bottom: 1px solid ${COLORS.GOLD};
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
        color: ${COLORS.FONT_WHITE};
        font-weight: 300;
        font-size: 1em;
        padding: 5px 30px;

        &:hover{
            color: ${COLORS.GOLD};
            transition: 0.5s;
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