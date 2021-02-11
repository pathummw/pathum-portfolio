import TopicComponent from "./TopicComponent";
import styled from 'styled-components';
import Anjalee from './img/anjalee.JPG';
import Sharmen from './img/sharmen.JPG';
import Digican from './img/digican.JPG';
import { COLORS } from './Colors';



const ItemListDiv = styled.div`
    display: flex;
    justify-content: space-around;
    min-height: 100vh;
    margin-top: 20vh;

    @media screen and (max-width: 730px){
        flex-direction: column;
        align-items: center;
    }
`

export default function Mywork() {
    return (
        <div id="myWork">
            <TopicComponent topic="My work" alignLight="left" />
            <ItemListDiv>
                <a href="http://anjalee.se/"> <Circle imgName={Anjalee} /> </a>
                <a href="http://sharmen.surge.sh/"> <Circle imgName={Sharmen} /> </a>
                <a href="http://digican.se/"> <Circle imgName={Digican} /> </a>
            </ItemListDiv>
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
            border: solid 5px ${COLORS.GOLD};
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