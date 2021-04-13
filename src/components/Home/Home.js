import {useState,useEffect} from 'react'
import './Home.css'
import Main from '../main/main.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Generes from '../genres/genres.js'
import { data } from 'jquery'
import Slider from '../slider/slider'
import { Link } from 'react-router-dom'

function Home(){

    const [heroHovered, setheroHovered] = useState(false)
    const [serieList1, setserieList1] = useState([])
    const [serieList2, setserieList2] = useState([])
    const [serieList3, setserieList3] = useState([])
    const [serieList4, setserieList4] = useState([])
    const [serieList5, setserieList5] = useState([])
    const [seriegenresfilter, setseriegenresfilter] = useState([])
    const [seriegenrestile, setseriegenrestitle] = useState([])
    const [flag, setflag] = useState(true)
    
    const handleHeroHover = () => {
       setTimeout(() => {
        setheroHovered(true)
       }, 2000); 
    }
    
    
    const handleHeroLeave = () => {
        setheroHovered(false)
    }
    
    function search(e){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`http://localhost:8000/resources/search?name=${e.target.value}`, requestOptions)
            .then(response => response.json())
            .then(result =>setseriegenresfilter(result))
            .catch(error => console.log('error', error));
    
            setflag(false)
    }


    useEffect( async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
              };
          
          fetch("http://localhost:8000/resources/tv_show", requestOptions)
            .then(response => response.json())
            .then(result =>setserieList1(result))
            .catch(error => console.log('error', error));
    
            fetch(`http://localhost:8000/homepage/popular`, requestOptions)
            .then(response => response.json())
            .then(result => setserieList2(result))
            .catch(error => console.log('error', error));
    
            fetch(`http://localhost:8000/resources/movie`, requestOptions)
            .then(response => response.json())
            .then(result => setserieList3(result))
            .catch(error => console.log('error', error));
    
            fetch(`http://localhost:8000/homepage/generator?genre=romance`, requestOptions)
            .then(response => response.json())
            .then(result => setserieList4(result))
            .catch(error => console.log('error', error));

            fetch(`http://localhost:8000/homepage/generator?genre=action`, requestOptions)
            .then(response => response.json())
            .then(result => setserieList5(result))
            .catch(error => console.log('error', error));
        }, [])
    
        return (
            <div>
            <div onMouseEnter={handleHeroHover} onMouseLeave={handleHeroLeave} className={`bigPosterContainer heroImg` }>
                <Main search={search} /> 
                <div className="heroContent">
                    <div className="movieTitle text-white"><img src="https://occ-0-4609-784.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYqvx3erH7dofSWwOXpbidBHsrBXla1F9-BTuUQmWpPFS0Wi_TUj6AiFBTFqs3sNjkmooN0BPHfuULQk7bsaPYSgSOYzOUlrHY8q.webp?r=103"/></div>
                    <div className="heroParagraph text-white">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A consequatur ut recusandae </p>
                    </div>
                    <div className="heroButtonContainer">
                       <Link to="/video" className="play"><div className='heroButton1'> <FontAwesomeIcon icon={faPlay} /> &nbsp; Play</div></Link>
                       <Link to="/video" className="moreInfo play" > <div className='heroButton2'> <FontAwesomeIcon icon={faInfoCircle}/> &nbsp; More Info</div></Link>
                    </div>
                </div>
            </div>
            <div className={flag? `hide` :`show`}>
        <Slider movie = {seriegenresfilter} title={seriegenrestile} />
        </div>
        <div className={flag? `show` :`hide`}>
            <Slider movie = {serieList2} title="Popular" />
            <Slider movie = {serieList4} title="Romance Movies && Tv-shows" />
            <Slider movie = {serieList3} title="Movies" />
            <Slider movie = {serieList1} title="Tvshows" />
            <Slider movie = {serieList5} title="Action Movies && Tv-shows" />
        </div>  
        </div>
    )
}
export default Home