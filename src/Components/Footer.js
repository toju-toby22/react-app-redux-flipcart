import {Link} from "react-router-dom"
import Bag from "../Assets/bag.svg"
import star from "../Assets/star.svg"
import gift from "../Assets/Help.svg"
import help from "../Assets/Gift.svg"
import Payment from "../Assets/payment.svg"


function Footer (){
    return <div>


                    <div className="last-secton">
                        <div className="sect2">
                    
                            <div>
                                <ul className="list2">
                                    <li className="links22">About</li>
                                    <li className="links2"><Link to="/">Contact Us</Link></li>
                                    <li className="links2"><Link to="/">About Us</Link></li>
                                    <li className="links2"><Link to="/">Careers</Link></li>
                                    <li className="links2"><Link to="/">Flipcart Stories</Link></li>
                                    <li className="links2"><Link to="/">Press</Link></li>
                                    <li className="links2"><Link to="/">Flipcart Wholesale</Link></li>
                                    <li className="links2"><Link to="/">Cooperate Information</Link></li>

                                </ul>
                            </div>

                            <div>
                                <ul className="list2">
                                    <li className="links22">HELP</li>
                                    <li className="links2"><Link to="/">Payments</Link></li>
                                    <li className="links2"><Link to="/">Shipping</Link></li>
                                    <li className="links2"><Link to="/">Cancellation & Returns</Link></li>
                                    <li className="links2"><Link to="/">FAQ</Link></li>
                                </ul>
                            </div>


                            <div>
                                <ul className="list2">
                                    <li className="links22">Policy</li>
                                    <li className="links2"><Link to="/">Return Policy</Link></li>
                                    <li className="links2"><Link to="/">Term of use</Link></li>
                                    <li className="links2"><Link to="/">Security</Link></li>
                                    <li className="links2"><Link to="/">Privacy</Link></li>
                                    <li className="links2"><Link to="/">Sitemap</Link></li>
                                    <li className="links2"><Link to="/">EPR Compliance</Link></li>
                                </ul>
                            </div>




                            <div>
                                <ul className="list2">
                                    <li className="links22">Social</li>
                                    <li className="links2"><Link to="/">Facebook</Link></li>
                                    <li className="links2"><Link to="/">Twitter</Link></li>
                                    <li className="links2"><Link to="/">Youtube</Link></li>
                                </ul>
                            </div>


                            <div className="right-list">
                                <ul className="list2 line">
                                    <li className="links22">Mail Us:</li>
                                    <li className="links222"><Link to="/">Flipkart Internet Private Limited,</Link></li>
                                    <li className="links222"><Link to="/">Buildings Alyssa, Begonia &</Link></li>
                                    <li className="links222"><Link to="/">Clove Embassy Tech Village,</Link></li>
                                    <li className="links222"><Link to="/">Outer Ring Road, Devarabeesanahalli Village,</Link></li>
                                    <li className="links222"><Link to="/">Bengaluru, 560103,</Link></li>
                                    <li className="links222"><Link to="/">Karnataka, India</Link></li>

                                </ul>
                            </div>


                            <div>
                                <ul className="list2">
                                    <li className="links22">Registered Office Address:</li>
                                    <li className="links222"><Link to="/">Flipkart Internet Private Limited,</Link></li>
                                    <li className="links222"><Link to="/">Buildings Alyssa, Begonia &</Link></li>
                                    <li className="links222"><Link to="/">Clove Embassy Tech Village,</Link></li>
                                    <li className="links222"><Link to="/">Outer Ring Road, Devarabeesanahalli Village,</Link></li>
                                    <li className="links222"><Link to="/">Bengaluru, 560103,</Link></li>
                                    <li className="links222"><Link to="/">Karnataka, India</Link></li>
                                    <li className="links222"><Link to="/">CIN : U51109KA2012PTC066107</Link></li>
                                    <li className="links222"><Link to="/">Telephone: <span className="phone">1800 202 9898</span></Link></li>
                                </ul>
                            </div>
                        </div>

                        
                    </div>


                    <div className="payments">
                            <ul className="company">

                                <li>
                                <img className="alb-img2" src={Bag} alt=""/>
                                    Sell on flip cart
                                </li>
                                <li>
                                <img className="alb-img2" src={star} alt=""/>
                                    Sell on flip cart
                                </li>
                                <li>
                                <img className="alb-img2" src={gift} alt=""/>
                                    Sell on flip cart
                                </li>
                                <li>
                                <img className="alb-img2" src={help} alt=""/>
                                    Sell on flip cart
                                </li>
                                <li>
                                © 2007-2022 Flipkart.com
                                </li>
                            </ul>

                            <img className="alb-img3" src={Payment} alt=""/>

                        </div>


    </div>
}


export default Footer;