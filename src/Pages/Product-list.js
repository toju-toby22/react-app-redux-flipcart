import { Link } from "react-router-dom";
import Header from "../Components/Header.js"
import Footer from "../Components/Footer.js";
import Listed from "../Components/list.js";
import clayboy from "../Assets/clayboy.jpeg";
import assured from "../Assets/assured.png";
import Right from "../Assets/next (1).png";





function List () {

            return <div>
            <Header/>
            <Listed/>

                    <div>
                            <div className="Two-sides">

                                    <div className="filters">

                                            <div className="push">
                                                <div className="clear">
                                                        <h2 className="filt">Filters</h2>
                                                        <h3 className="all">CLEAR ALL</h3>
                                                    </div>

                                                    <button className="Xmin">X Min-₹2500+</button>
                                            </div>

                                            {/* <hr/> */}

                                            <div className="categories">
                                                <h4 className="cat">Categories</h4>
                                                <ul className='clothing'>
                                                    <Link className="clothing-link" to="/"> <li>CLothing And Accessories</li></Link>
                                                    <Link className="clothing-link" to="/"> <li>Bottom Wear</li></Link>
                                                    <Link className="clothing-link" to="/"> <li>Cargos</li></Link>
                                                </ul>
                                                <h3 className="cat3">Men Cargos</h3>

                                            </div>

                                            <div className="selection">
                                                <select className="optional">
                                                    <option>Min</option>  
                                                </select>
                                                <p>to</p>
                                                <select className="optional">
                                                    <option>₹2500</option>  
                                                </select>
                                            </div>

                                            

                                      <Link className="arrow" to="/" >
                                      <div className="drop-down"> 
                                                <p>BRAND</p>
                                                <img className="next" src={Right} alt="next"/>
                                            </div>
                                      </Link>

                                        <Link className="arrow" to="/" >
                                            <div className="drop-down">
                                                <p>CUSTOMER RATINGS</p>
                                                <img className="next" src={Right} alt="next"/>

                                            </div>
                                        </Link>

                                        <Link className="arrow" to="/" >
                                            <div className="drop-down">
                                                <p>SIZE</p>
                                                <img className="next" src={Right} alt="next"/>

                                            </div>
                                        </Link>
                                        
                                            <Link className="arrow" to="/" >
                                            <div className="drop-down">
                                                <p>OFFERS</p>
                                                <img className="next" src={Right} alt="next"/>

                                            </div>
                                            </Link>



                                            <Link className="arrow" to="/" >
                                            <div className="drop-down">
                                                <p>DISCOUNT</p>
                                                <img className="next" src={Right} alt="next"/>

                                            </div>
                                            </Link>


                                            <Link className="arrow" to="/" >
                                            <div className="drop-down">
                                                <p>GENDER</p>
                                                <img className="next" src={Right} alt="next"/>

                                            </div>
                                            </Link>


                                            <Link className="arrow" to="/" >
                                            <div className="drop-down">
                                                <p>PATTERN</p>
                                                <img className="next" src={Right} alt="next"/>

                                            </div>
                                            </Link>



                                            <Link className="arrow" to="/" >
                                            <div className="drop-down">
                                                <p>COLOR</p>
                                                <img className="next" src={Right} alt="next"/>

                                            </div>
                                            </Link>



                                            <Link className="arrow" to="/" >
                                            <div className="drop-down">
                                                <p>THEME</p>
                                                <img className="next" src={Right} alt="next"/>

                                            </div>
                                            </Link>
                                            
                                            <Link className="arrow" to="/" >
                                            <div className="drop-down">
                                                <p>FABRIC</p>
                                                <img className="next" src={Right} alt="next"/>

                                            </div>
                                            </Link>

                                            
                                            <div className="drop-down">
                                                <p>AVAILABILTY</p>
                                                <img className="next" src={Right} alt="next"/>

                                            </div>


                                    </div>


                                    <div className="two-sides2">

                                            <div>
                                            <ul className="banging-list">
                                                            <li>Home</li>
                                                            <li className="link-banging">Home</li>
                                                            <li className="link-banging">Clothing And....</li>
                                                            <li className="link-banging">Bottom Wear</li>
                                                            <li className="link-banging">Cargos</li>
                                                            <li className="link-banging">Men cargos</li>
                                                        </ul>
                                            </div>

                                            <div className="mens">
                                                <h3>Men's Cargos</h3>
                                                <p className="showing">(Showing 1 - 40 products of 2,606 products)</p>
                                            </div>

                                            <div className="sorts">
                                                <ul className="sort">
                                                    <li>Sort by</li>
                                                    <li className="sort-list">Popularity</li>
                                                    <li className="sort-list">Price - Low to High</li>
                                                    <li className="sort-list">Price - High to low</li>
                                                    <li className="sort-list">Newest First</li>
                                                </ul>
                                            </div>


                                            <div className="table"> 
                                                  
                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>



                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>



                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>




                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>











                                                     
                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>



                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>



                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>




                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>












                                                     
                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>



                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>



                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>




                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>











                                                     
                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>



                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>



                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>




                                                  <Link className="box-link" to="/Product">
                                                  <div>
                                                        <img className="clay" src={clayboy} alt="claybpy"/>
                                                        <p className="dry">Dryfitbazar</p>
                                                        <div className="carg">
                                                            <p>Men Cargos</p>
                                                            <img className="assured" src={assured} alt="assured"/>
                                                        </div>
                                                        <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                                                    </div>
                                                  </Link>

                                                    
                                            </div>


                                    </div>


                                </div>
                    </div>

                    <Footer/>

        </div>

}

export default List;



