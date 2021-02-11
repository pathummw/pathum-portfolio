import TopicComponent from './TopicComponent';
import { COLORS } from './Colors';
import styled, { css } from "styled-components";

const StyledDIV = styled.div`
    display:flex;
    align-items: baseline;
    /* background-color: lightcyan; */
    /* justify-content: center; */
    min-height: 75vh;
    margin-top: 20vh;
    color: ${COLORS.FONT_GREY};
    h2{
        font-weight: 200;
        font-size: 2.5em;
        margin: 1em 0;
    }
    /* h3{
        font-weight: 300;
        font-size: 2em;
    } */
    h3{
            font-size: 1.5em;
            font-weight:100; 
        }

    @media screen and (max-width: 980px){
        flex-direction: column;
        align-items: center;

        /* margin-top: 10vh; */
    }
`

const Left = styled.section`
    flex:2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: red; */
    width: 100%;

`
const Right = styled.section`
    flex:2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: yellow; */
    width: 100%;
`
const Middle = styled.section`    //This is a empty space
    flex:1;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 980px){
        display: none;
    }
    
    
`

export default function Skills() {
    return (
        <div id="skills">
            <TopicComponent topic="Skills" alignLight="right" />
            <StyledDIV>
                <Left>
                    <h2>Frontend languages</h2>

                    <SkillItem topic="Javascript" level="level3" />
                    <SkillItem topic="React" level="level1" />
                    <SkillItem topic="HTML" level="level4" />
                    <SkillItem topic="CSS" level="level4" />

                    <h2>Other</h2>

                    <SkillItem topic="SQL" level="level2" />
                    <SkillItem topic="C++" level="level1" />
                </Left>
                <Middle>

                </Middle>
                <Right>
                    <h2>Design tools</h2>
                    <SkillItem topic="Illustrator" level="level3" />
                    <SkillItem topic="Photoshop" level="level3" />
                    <SkillItem topic="Figma" level="level4" />

                    <h2>Dev tools</h2>
                    <SkillItem topic="VS code" />
                    <SkillItem topic="Github" />
                </Right>



            </StyledDIV>

        </div>
    );
}

const SkillItemDiv = styled.div`
    display: flex;
    align-items: center;
    /* background-color: yellow; */
    section:nth-child(1){
        flex: 1;
        /* background-color: lightpink; */
    }
    section:nth-child(2){
        flex: 1;
        display: flex;
        justify-content: flex-end;
        /* background-color:tomato; */
    }

    @media screen and (max-width: 730px){
        /* display: none; */
        width: 100%;
    }
`

function SkillItem(props) {
    return (
        <SkillItemDiv>
            <section>
                <h3>{props.topic}</h3>
            </section>
            <section>
                <FiveDots level={props.level} />
            </section>

        </SkillItemDiv>
    );
}



const DotContainer = styled.div`
    display:flex;

    span{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        display: flex;
        margin: 5px;
        background-color: grey;
    }
    ${props =>
        props.level === "level1" &&
        css`
        span:nth-child(1){
        background-color: green;
        }
        `};

    ${props =>
        props.level === "level2" &&
        css`
        span:nth-child(1),span:nth-child(2){
        background-color: green;
        }
        `};
        
    ${props =>
        props.level === "level3" &&
        css`
        span:nth-child(1),span:nth-child(2),span:nth-child(3){
        background-color: green;
        }
        `};

    ${props =>
        props.level === "level4" &&
        css`
        span:nth-child(1),span:nth-child(2),span:nth-child(3),span:nth-child(4){
        background-color: green;
        }
        `};

    ${props =>
        props.level === "level5" &&
        css`
        span:nth-child(1),span:nth-child(2),span:nth-child(3),span:nth-child(4),span:nth-child(5){
        background-color: green;
        }
        `};
`

function FiveDots(props) {
    return (
        <DotContainer level={props.level}>
            <span />
            <span />
            <span />
            <span />
            <span />
        </DotContainer>
    );
}


