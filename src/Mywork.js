import TopicComponent from "./TopicComponent";
import styled from 'styled-components';
import Anjalee from './img/anjalee.JPG';
import Movies from './img/movies.jpg';
import Listig from './img/listig_login.JPG';
import { COLORS } from './Colors';



const ItemListDiv = styled.div`
    display: flex;
    justify-content: space-around;
    min-height: 75vh;
    padding-top: 8vh;

    @media screen and (max-width: 730px){
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 450px){
            margin-bottom: 10vh;
            padding-top: 5vh;
        }
`

export default function Mywork() {
    return (
        <div id="myWork">
            <TopicComponent topic="My work" alignLight="left" />
            <ItemListDiv>
                <a href="https://anjalee.surge.sh/"> <Circle imgName={Anjalee} alt="Image link, website for a footvård " /> </a>
                <a href="https://pathummovies.surge.sh/"> <Circle imgName={Movies} alt="React movie project" /> </a>
                <a href="https://listig.surge.sh/"> <Circle imgName={Listig} alt="Digican project link image,Pathums own company" /> </a>
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
            object-fit: cover;
            border: solid 5px ${COLORS.GOLD};
            transition: ease-in-out 1s;
        }

        img:hover{
            width: 300px;
            height: 300px;
            transition: ease-in-out .5s; 
        }





        @media screen and (max-width: 730px){
            img{
                width: 150px;
                height: 150px;
            }
            
        }

    `

function Circle(props) {
    return (
        <ImageDIV>
            <img src={props.imgName} alt="" />
        </ImageDIV>
    );
}