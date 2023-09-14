import React from 'react';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/tv.png';
import {GrHomeRounded} from 'react-icons/gr';
import {BsCameraReels} from 'react-icons/bs';
import {RiComputerLine} from 'react-icons/ri';
import {FaRegCalendarAlt} from 'react-icons/fa';
import {BsListStars} from 'react-icons/bs';
import {BiMobileVibration} from 'react-icons/bi';
import {FaStar} from 'react-icons/fa';
import {TbLogout} from 'react-icons/tb';
import playBtn from '../images/play.png';
import mixedMovie from '../images/mixed-movie.png';


function Moviedetails() {
    const {id} = useParams();
    console.log(id);
    const [singleMovie, setSingleMovie] = useState([]);

    const getSingleMovie = ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a6353f9f64549fe95239f9c5cac6dbeb`)
        .then((resp) => resp.json())
        .then((data) =>{
            setSingleMovie(data);
            console.log(data);
        });
    };
    useEffect(() => {
     getSingleMovie();
    
    },);

    return (
    <div className='movieDetailsHold d-flex '>
        <div className='sideBar'>
            <div className='sideBarLogo'>
                <img src={logo} alt='logo' width='25px' height='25px'/>
                <span>MovieBox</span>
            </div>
            <div className='sideBarNav'>
                <div className="sideLink">
                     <Link to='/' className='link'> <GrHomeRounded /> <span>  Home </span></Link>     
                </div>
                <div className="sideLink active">
                     <Link  className='link activeLink'> <BsCameraReels/><span>  Movies </span></Link>  
                </div>
                <div className="sideLink">
                <Link  className='link'> <RiComputerLine/> <span>  TV Series </span></Link>  
                </div>
                <div className="sideLink">
                <Link className='link'> <FaRegCalendarAlt/> <span>  Upcoming </span></Link>  
                    
                </div>
                <div className='ads'>
                    <small className='first'>Play movie quizes and earn free tickets</small><br/>
                    <small className='sec'>50k people are playing now</small>
                    <div>
                        <button class='btn btn-light mt-2'>Start playing</button>
                    </div>
                </div>
                <div className="sideLink">
                    <Link  className='link'> <TbLogout/> <span>  Logout </span></Link>  
                </div>
            </div>
        </div>
        <div className=' container-fluid movie-details'>
            <div className='row mt-2 container-fluid'>
                <div className='movieHold col-lg-12 col-md-6 col-sm-6 br-5 '>
                    <img src={`https://image.tmdb.org/t/p/original${singleMovie.poster_path}`} alt='moive' width="100%" className='imgfluid'  />
                    <img src={playBtn} alt='playbtn' className='play-Btn' width='60px' height='60px'/>
                    <i className='play mt-2'>Watch trailer</i>
                </div>
               
            </div>
            <div className='row mt-2 container-fluid'>
                <div className='col-lg-9 col-md-9 col-sm-12'>
                    <div className="col-lg-12 col-md-12 col-sm-12 mainDetails">
                        <span data-testid="movie-title" className='movieName'> {singleMovie.title}</span>
                        <span data-testid="movie-release-date" className='movieDate'>{singleMovie.release_date}</span>
                        <span className='pgRating'> PG-13</span>
                        <span data-testid="movie-runtime" className='watchTime'> {singleMovie.runtime}</span>
                        <span className='movieChoice '>Action</span>
                        <span className='movieChoice'>Drama</span>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 movie-overview mt-3">
                        <div className='movie-overview'>
                            <p data-testid="movie-overview" className='movieOverview '>
                            {singleMovie.overview}
                            </p>
                        </div>
                       
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12" class='castList'>
                        <p>Director: <span>Joseph Kosinski</span></p>
                        <p>Writers: <span>Jim Cash, Jack Epps jr, Peter Craig</span></p>
                        <p>Stars: <span>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className='d-flex rated'>
                            <p className='btn btn-dark topRate'>Top rated movies #65</p>
                            <select className='selectTag'>
                                <option className='option fs-1 fw-bold'>Awards 9 nominations</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 col-md-3 col-sm-12 stats'>
                    <div className='col-lg-12 col-md-12 col-sm-12 movie-star'>
                    <p> <span><FaStar/></span> 8.5/350k</p>
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12 stats-btn-hold  '>
                        
                        <button className='btn btn-dark btnShow'> <BiMobileVibration/> see showtimes</button>
                        <button className='btn btn-light btnWatch'><BsListStars/>  more watch options</button>
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12 mixedMovieHold' >
                        <img src={mixedMovie} alt='upcomingmovie' width='100%' height='150px' className='mixed-movie'/>
                        <span className='best'><BsListStars/>  the best movies and shows in september</span>
                    </div>

                </div>

            </div>
            
        </div>

    </div>
  )
}

export default Moviedetails;