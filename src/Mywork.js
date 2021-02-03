import TopicComponent from "./TopicComponent";
import styled from 'styled-components';
import Man from './man.png';
import Profile from './profile.jpg';


const StyledDIV = styled.div`
    min-height: 100vh;
    display: flex;
    margin-top: 20vh;
`

const ItemListDiv = styled.div`
    display: flex;
    justify-content: space-around;
    min-height: 100vh;
    margin-top: 20vh;
`

export default function Mywork() {
    return (
        <div id="myWork">
            <TopicComponent topic="My work" alignLight="left" />
            {/* <StyledDIV > */}

            <ItemListDiv>
                <Circle imgName={Man} />
                <Circle imgName={Profile} />
                <Circle imgName={Profile} />
                <Circle imgName={Man} />
            </ItemListDiv>
            {/* </StyledDIV> */}
        </div>

    );
}

const ImageDIV = styled.div`
    display: flex;
        img{
            width: 200px;
            height: 200px;
            border-radius: 50%;
            /* position: absolute;
            top: 20px;
            left: 20px; */
            object-fit: cover;
            border: solid 5px #D1AD54;
            transition: ease-in-out 1s;
            /* z-index: -5; */
        }

        img:hover{
            width: 300px;
            height: 300px;
            /* transition: 1s; */
            transition: ease-in-out .5s; 
            /* border: solid 5px #D1AD54; */
        }
        /* background-color:  aliceblue; */
    `

function Circle(props) {
    return (
        <ImageDIV>
            <img src={props.imgName} alt="" />
        </ImageDIV>
    );
}