import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import posterImg1 from '../images/poster-image-1.png';
import posterImg2 from '../images/poster-image-2.png';
import posterImg3 from '../images/poster-image-3.png';
import posterImg4 from '../images/poster-image-4.png';
import posterImg9 from '../images/poster-image-9.png';
import posterImg10 from '../images/poster-image-10.png';
import posterImg11 from '../images/poster-image-11.png';
import posterImg12 from '../images/poster-image-12.png';
import fruit from '../images/fruit.png';
import imdb from '../images/imdb.png';
import Footer from './Footer';
import Heart from '../images/heart.svg';






function Home() {
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
                    <div className='col-lg-3 col-md-3 col-sm-6'>
                        <Link to="/movies/:id" className='movieLink'>
                        <card data-testid="movie-card" className='card b-none'>
                            <img data-testid="movie-poster"  src={posterImg1} alt="/" width='100%'height='300px' />
                            <div className='card-body'>
                                <p data-testid="movie-release-date" className='release-date'>USA, 2016 - current</p>
                                <h6 data-testid="movie-title" className='title'> Stranger things</h6>
                                <div className='card-rating'>
                                    <div className='rate'>
                                      <img src={imdb} alt="imdb" width='30px' />
                                      <small>8.6/10</small>
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
                    <div className='col-lg-3 col-md-3 col-sm-6'>
                        <card  className='card b-none'>
                            <img src={posterImg2} alt="" width='100%'height='300px' />
                            <div className='card-body'>
                                <p className='release-date'>USA, 2016 - current</p>
                                <h6 className='title'> Stranger things</h6>
                                <div className='card-rating'>
                                    <div className='rate'>
                                      <img src={imdb} alt="imdb" width='30px' />
                                      <small>8.6/10</small>
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
                        
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6'>
                        <card  className='card b-none'>
                            <img src={posterImg3} alt="" width='100%'height='300px' />
                            <div className='card-body'>
                                <p className='release-date'>USA, 2016 - current</p>
                                <h6 className='title'> Stranger things</h6>
                                <div className='card-rating'>
                                    <div className='rate'>
                                      <img src={imdb} alt="imdb" width='30px' />
                                      <small>8.6/10</small>
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
                        
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6'>
                        <card  className='card b-none'>
                            <img src={posterImg4} alt="" width='100%'height='300px' />
                            <div className='card-body'>
                                <p className='release-date'>USA, 2016 - current</p>
                                <h6 className='title'> Stranger things</h6>
                                <div className='card-rating'>
                                    <div className='rate'>
                                      <img src={imdb} alt="imdb" width='30px' />
                                      <small>8.6/10</small>
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
                        
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6'>
                        <card  className='card b-none'>
                            <img src={posterImg9} alt="" width='100%'height='300px' />
                            <div className='card-body'>
                                <p className='release-date'>USA, 2016 - current</p>
                                <h6 className='title'> Stranger things</h6>
                                <div className='card-rating'>
                                    <div className='rate'>
                                      <img src={imdb} alt="imdb" width='30px' />
                                      <small>8.6/10</small>
                                    </div>
                                    <div className='percent'>
                                      <img src={fruit} alt="fruit" width='20px'/>
                                      <small>98%</small>
                                    </div>
                                </div>
                                <p className='genre'> Action, Adventre, Horror</p>
                            </div>

                        </card>
                        
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6'>
                        <card  className='card b-none'>
                            <img src={posterImg10} alt="" width='100%'height='300px' />
                            <div className='card-body'>
                                <p className='release-date'>USA, 2016 - current</p>
                                <h6 className='title'> Stranger things</h6>
                                <div className='card-rating'>
                                    <div className='rate'>
                                      <img src={imdb} alt="imdb" width='30px' />
                                      <small>8.6/10</small>
                                    </div>
                                    <div className='percent'>
                                      <img src={fruit} alt="fruit" width='20px'/>
                                      <small>98%</small>
                                    </div>
                                </div>
                                <p className='genre'> Action, Adventre, Horror</p>
                            </div>

                        </card>
                        
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6'>
                        <card  className='card b-none'>
                            <img src={posterImg11} alt="" width='100%'height='300px' />
                            <div className='card-body'>
                                <p className='release-date'>USA, 2016 - current</p>
                                <h6 className='title'> Stranger things</h6>
                                <div className='card-rating'>
                                    <div className='rate'>
                                      <img src={imdb} alt="imdb" width='30px' />
                                      <small>8.6/10</small>
                                    </div>
                                    <div className='percent'>
                                      <img src={fruit} alt="fruit" width='20px'/>
                                      <small>98%</small>
                                    </div>
                                </div>
                                <p className='genre'> Action, Adventre, Horror</p>
                            </div>

                        </card>
                        
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6'>
                        <card  className='card b-none'>
                            <img src={posterImg12} alt="" width='100%'height='300px' />
                            <div className='card-body'>
                                <p className='release-date'>USA, 2016 - current</p>
                                <h6 className='title'> Stranger things</h6>
                                <div className='card-rating'>
                                    <div className='rate'>
                                      <img src={imdb} alt="imdb" width='30px' />
                                      <small>8.6/10</small>
                                    </div>
                                    <div className='percent'>
                                      <img src={fruit} alt="fruit" width='20px'/>
                                      <small>98%</small>
                                    </div>
                                </div>
                                <p className='genre'> Action, Adventre, Horror</p>
                            </div>

                        </card>
                        
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6'>
                        <card  className='card b-none'>
                            <img src={posterImg9} alt="" width='100%'height='300px' />
                            <div className='card-body'>
                                <p className='release-date'>USA, 2016 - current</p>
                                <h6 className='title'> Stranger things</h6>
                                <div className='card-rating'>
                                    <div className='rate'>
                                      <img src={imdb} alt="imdb" width='30px' />
                                      <small>8.6/10</small>
                                    </div>
                                    <div className='percent'>
                                      <img src={fruit} alt="fruit" width='20px'/>
                                      <small>98%</small>
                                    </div>
                                </div>
                                <p className='genre'> Action, Adventre, Horror</p>
                            </div>

                        </card>
                        
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6'>
                        <card  className='card b-none'>
                            <img src={posterImg10} alt="" width='100%'height='300px' />
                            <div className='card-body'>
                                <p className='release-date'>USA, 2016 - current</p>
                                <h6 className='title'> Stranger things</h6>
                                <div className='card-rating'>
                                    <div className='rate'>
                                      <img src={imdb} alt="imdb" width='30px' />
                                      <small>8.6/10</small>
                                    </div>
                                    <div className='percent'>
                                      <img src={fruit} alt="fruit" width='20px'/>
                                      <small>98%</small>
                                    </div>
                                </div>
                                <p className='genre'> Action, Adventre, Horror</p>
                            </div>

                        </card>
                        
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6'>
                        <card  className='card b-none'>
                            <img src={posterImg11} alt="" width='100%'height='300px' />
                            <div className='card-body'>
                                <p className='release-date'>USA, 2016 - current</p>
                                <h6 className='title'> Stranger things</h6>
                                <div className='card-rating'>
                                    <div className='rate'>
                                      <img src={imdb} alt="imdb" width='30px' />
                                      <small>8.6/10</small>
                                    </div>
                                    <div className='percent'>
                                      <img src={fruit} alt="fruit" width='20px'/>
                                      <small>98%</small>
                                    </div>
                                </div>
                                <p className='genre'> Action, Adventre, Horror</p>
                            </div>

                        </card>
                        
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6'>
                        <card  className='card b-none'>
                            <img src={posterImg12} alt="" width='100%'height='300px' />
                            <div className='card-body'>
                                <p className='release-date'>USA, 2016 - current</p>
                                <h6 className='title'> Stranger things</h6>
                                <div className='card-rating'>
                                    <div className='rate'>
                                      <img src={imdb} alt="imdb" width='30px' />
                                      <small>8.6/10</small>
                                    </div>
                                    <div className='percent'>
                                      <img src={fruit} alt="fruit" width='20px'/>
                                      <small>98%</small>
                                    </div>
                                </div>
                                <p className='genre'> Action, Adventre, Horror</p>
                            </div>

                        </card>
                        
                    </div>



                </div>

            </div>

        </section>
        <Footer/>

    </div>
  )
}

export default Home; 

