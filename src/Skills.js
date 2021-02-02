import TopicComponent from './TopicComponent';

import styled, { css } from "styled-components";

const StyledDIV = styled.div`
    display:flex;
    align-items: center;
    min-height: 100vh;
    color: #716D6D;
    h2{
        font-weight: 400;
        font-size: 2.5em;
    }
    h3{
        font-weight: 300;
        font-size: 2em;
    }
`

const Left = styled.section`
    flex:1;
`
const Right = styled.section`
    flex:1;
`

export default function Skills() {
    return (
        <div id="skills">
            <TopicComponent topic="Skills" alignLight="right" />
            <StyledDIV>
                <Left>
                    <h2>Programming skills</h2>

                    <SkillItem topic="Javascript" level="level3" />
                    <SkillItem topic="React" level="level1" />
                    <SkillItem topic="HTML" level="level4" />
                    <SkillItem topic="CSS" level="level4" />
                </Left>
                <Right>
                    <h2>Creative skills</h2>
                    <SkillItem topic="Illustrator" level="level3" />
                    <SkillItem topic="Photoshop" level="level3" />
                </Right>

            </StyledDIV>

        </div>
    );
}

const SkillItemDiv = styled.div`
    display: flex;
    align-items: center;
    section:nth-child(1){
        flex: 1;
    }
    section:nth-child(2){
        flex: 1;
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
        props == "level3" &&
        css`
        span:nth-child(1),span:nth-child(2){
        background-color: green;
        }
        `};
    
    
`

function FiveDots(props) {
    return (
        <DotContainer level>
            <span />
            <span />
            <span />
            <span />
            <span />
        </DotContainer>
    );
}


