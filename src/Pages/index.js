import { Link } from "react-router-dom";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";

import Top from "../Assets/1.png";
import first2 from "../Assets/2.png";
import first3 from "../Assets/3.png";
import first4 from "../Assets/4.png";
import first5 from "../Assets/5.png";
import first6 from "../Assets/5.png";
import first7 from "../Assets/6plane.png";
import first8 from "../Assets/7.png";
import first9 from "../Assets/8.png";

import Carousel from "../Components/Carousel.js"
// import slide1 from "../Assets/slide1.jpeg";
// import slide2 from "../Assets/slide2.jpg";
// import slide3 from "../Assets/slide3.jpg";
import Down from "../Assets/arrow-down-sign-to-navigate.png"




function Index() {
   return <div>
               <Header/>


                     <div className="top" > 


                        <div className="paddi">
                              <Link className="pic-link" to="/Product-list">
                              <div className="pic"> 
                                    <img className="first-pic" src={Top}/>
                                    <p>Top Offers
                               <img className="down-img" src={Down} alt="src"/>    
                                          </p>                                 
                              </div>
                              </Link>

                              <Link className="pic-link" to="/">
                              <div className="pic"> 
                                    <img className="first-pic" src={first2} alt="picture"/>
                                    <p>Top Offers
                               <img className="down-img" src={Down} alt="src"/>    
                                           </p>                                 
                              </div>
                              </Link>

                              <Link className="pic-link" to="/">
                              <div className="pic"> 
                                    <img className="first-pic" src={first3} alt="picture"/>
                                    <p>Top Offers
                               <img className="down-img" src={Down} alt="src"/>    
                                          </p>                                 
                              </div>
                              </Link>


                              <Link className="pic-link" to="/">
                              <div className="pic"> 
                                    <img className="first-pic" src={first4} alt="picture"/>
                                    <p>Top Offers
                               <img className="down-img" src={Down} alt="src"/>    
                                          </p>                                 
                              </div>
                              </Link>


                              <Link className="pic-link" to="/">
                              <div className="pic"> 
                                    <img className="first-pic" src={first5} alt="picture"/>
                                    <p>Top Offers
                               <img className="down-img" src={Down} alt="src"/>    
                                          </p>                                 
                              </div>
                              </Link>



                              <Link className="pic-link" to="/">
                              <div className="pic"> 
                                    <img className="first-pic" src={first6} alt="picture"/>
                                    <p>Top Offers
                               <img className="down-img" src={Down} alt="src"/>    
                                          </p>                                 
                              </div>
                              </Link>



                              <Link className="pic-link" to="/">
                              <div className="pic"> 
                                    <img className="first-pic" src={first7} alt="picture"/>
                                    <p>Top Offers
                               <img className="down-img" src={Down} alt="src"/>    
                                          </p>                                 
                              </div>
                              </Link>

                              <Link className="pic-link" to="/">
                              <div className="pic"> 
                                    <img className="first-pic" src={first8} alt="picture"/>
                                    <p>Top Offers
                               <img className="down-img" src={Down} alt="src"/>    
                                          </p>                                 
                              </div>
                              </Link>


                              <Link className="pic-link" to="/">
                              <div className="pic"> 
                                    <img className="first-pic" src={first9} alt="picture"/>
                                    <p>Top Offers
                               <img className="down-img" src={Down} alt="src"/>    
                                          </p>                                 
                              </div>
                              </Link>
                        </div>
                     </div>



                        <Carousel/>

                     {/* <div class="slider">
                              <div>
                              <img className="slide" src={slide1}/>
                              <img className="slide" src={slide2}/>
                              <img className="slide" src={slide3}/>
                              </div>
                     </div> */}
                     <Footer/>
   </div>
}

export default Index;