import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import fruit from '../images/fruit.png';
import imdb from '../images/imdb.png';
import Footer from './Footer';
import Heart from '../images/heart.svg';






function Home() {
    const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=a6353f9f64549fe95239f9c5cac6dbeb")
      .then((resp) => resp.json())
      .then((data) =>{
        let slicedData = data.results;
        slicedData = slicedData.slice(0, 10);
        console.log(slicedData);
        setMovies(slicedData);
      } 
       
       
        
      );
  };
  console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);



  return (
    <div>
        <Header/>
        <section className='sectionOne container  '>
            <div >
                <div className='row mt-5'>
                    <div className='col-lg-12 col-md 12 col-ms-12 heading'>
                       <h6 className='fw-bold'> Featured Movies</h6>
                       <small className='small'>See More</small>
                    </div>
                   
                </div>
                <div className ='row mt-3'>
                    {movies ? (movies.map(movie => (
                    <div className='col-lg-3 col-md-3 col-sm-6'>
                        <Link to={`/movie/${movie.id}`} className='movieLink'>
                        <card data-testid="movie-card" className='card b-none'>
                            <img data-testid="movie-poster"  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="/" width='100%'height='300px' />
                            <div className='card-body'>
                            <p data-testid="movie-release-date" className='release-date'>{movie.release_date}</p>
                                <h6 data-testid="movie-title" className='title'> {movie.title}</h6>
                                <div className='card-rating'>
                                    <div className='rate'>
                                      <img src={imdb} alt="imdb" width='30px' />
                                      <small>{movie.popularity}</small>
                                    </div>
                                    <div className='percent'>
                                      <img src={fruit} alt="fruit" width='20px'/>
                                      <small>98%</small>
                                    </div>
                                </div>
                                <p className='genre'> Action, Adventre, Horror</p>
                            </div>
                            <img src={Heart} alt="favoutite" className='imgLike'/>

                        </card>
                        </Link>
                        
                        
                    </div>
                    ))):("please wait")
                    }
                   



                </div>

            </div>

        </section>
        <Footer/>

    </div>
  )
}

export default Home; 

