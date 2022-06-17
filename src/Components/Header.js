import {Link} from "react-router-dom"
import flip from "../Assets/flip.png";
import Plus from "../Assets/plus.png"



function Header (){
    return  <div>

                      <div className="nav">

             
                               <div className="nav-bar">


                                {/* <div className="nav-bar2"> */}

                                    <div className="bar">
                                            <div className="flip-cart">
                                                    <Link to="/"><img className="links-logo" src={flip} alt=""/>
                                                    <div className="explore22">
                                                        <p>Explore <span className="plyus">Plus</span> <img className="plus" src={Plus} alt="plus"/></p>
                                                    </div>
                                                    </Link>
                                                </div>

                                                <div>
                                                    <input
                                                    className="input"
                                                    type="text"
                                                    placeholder="Search for products brand and more"
                                                    />
                                                </div>

                                    
                                    </div>

                                    <div>
                                                <div className="login">
    
                                                    <Link className="login1" to="/Login"> <p>Login</p> </Link>                                                    
                                                </div>
                                    </div>

                                    <div className="bar2">
                                    


                                            <div>
                                                <div className="more">
                                                   <Link className="more-Link" to="/Product-list"> <p>More</p></Link>
                                                </div>
                                            </div>


                                            <div>
                                                <div className="cart">
                                                    {/* <img src={}/> */}
                                                    <p>Cart</p>
                                                </div>
                                            </div>
                                    </div>

                                {/* </div> */}




                                </div>
                    </div>


               




                
    </div>
}

export default Header;