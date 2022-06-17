import { Link } from "react-router-dom";
import Footer from "../Components/Footer.js"
import Header from "../Components/Header";
import Star from "../Assets/star (1).png"
import Tag from "../Assets/price-tag.png"

import cargo1 from "../Assets/30-army-cargo-1.jpeg"
import cargo2 from "../Assets/30-army-cargo-2.jpeg"
import cargo3 from "../Assets/30-army-cargo-3.jpeg"



function Product () {
        return<div>



                    <div className="head">
            <Header/>

                        <div className="Wrapper">
                            
                        <div className="fix">
                            <div className="product">
                                <div className="cargo-list">
                                    <img className="cargo" src={cargo1} alt="cargo"/>
                                    <img className="cargo" src={cargo2} alt="cargo"/>
                                    <img className="cargo" src={cargo3} alt="cargo"/>
                                </div>

                                <div>
                                <img className="cargo2" src={cargo1} alt="cargo"/>
                                </div>
                            </div>
                            <div className="product-btn">
                                <Link to="/"><button className="add-btn">ADD TO CART</button></Link>
                                <Link to="/"><button className="buy-btn">BUY NOW</button></Link>                              
                            </div>
                        </div>


                        <div className="Bang-safety">


                            <div>
                                <ul className="bang-list">
                                    <li>Home</li> []
                                    <li className="link">Clothing and .....</li>
                                    <li className="link">Bottomwear</li>
                                    <li className="link">Cargos</li>
                                    <li className="link">Men Crgos</li>
                                    <li className="link">Bang Safety</li>
                                    <li className="link">Bang Safety</li>
                                </ul>
                            </div>


                            <h3 className="safety">Bang Safety</h3>
                            <h2 className="Men">Men Cargos</h2>
                            <h4 className="special">Special price</h4>
                            <div>
                                <ul className="currency">
                                    <li className="isdndian">₹869</li>
                                    <li className="currency-links1">₹1,200</li>
                                    <li className="currency-links2">27% off</li>
                                    <li className="currency-links3">₹869</li>
                                    <li className="currency-links4">Hurry, Only 3 left!</li>
                                </ul>
                            </div>
                            <div className="rating">
                                <p className="No">2.5 <img className="star" src={Star} alt="star"/> </p>
                                <p className="review">4 ratings and 1 reviews</p>
                            </div>

                            <h3 className="offers">Available offers</h3>

                            <div>
                                <ul className="Terms">
                                   <li className="tag"> 
                                       <img className="Tag" src={Tag} alt="star"/>
                                   <span className="span-tag">
                                   Special PriceGet extra 8% off (price inclusive of discount) </span>   <Link className="conditions" to="/">T&C</Link>
                                    </li>

                                    <li className="tag"> 
                                        <img className="Tag" src={Tag} alt="star"/>
                                   <span className="span-tag"> Bank Offer5% Cashback on Flipkart Axis Bank Card  </span>   <Link className="conditions" to="/">T&C</Link>
                                    </li>

                                     <li className="tag"> 
                                         <img className="Tag" src={Tag} alt="star"/>
                                   <span className="span-tag">
                                   Partner OfferSign up for Flipkart Pay Later and get FlipkaGift Card worth ₹100* </span><Link className="conditions" to="/">Know More </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="Delivery2">
                                    <div>
                                        <div>
                                            <p>Deliver to</p>
                                        </div>
                                    </div>

                                    <div className="services">
                                            <p>Services</p>

                                        <div>
                                        <div>
                                                <p>14 Days Return Policy</p>
                                            </div>
                                            <div>
                                                <p>14 Days Return Policy</p>
                                            </div>
                                         </div>
                                    </div>
                            </div>


                            <div className="pin-code">
                                <input
                                type="text"
                                placeholder="Enter delivery pincode                    Check"
                                className="pin"
                                />
                            </div>



                            <div className="usually">
                                <p>Usually delivered in5 days</p>
                                <p>Enter pincode for exact delivery dates/charges</p>
                            </div>

                            <Link className="conditions" to="/">View Details</Link>


                            <div>
                                <p>Color</p>

                                <div>
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>


                            <div className="sizes">
                                <p>Size</p>

                                <div>
                                    <ul className="size">
                                        <li className="size-list">S</li>
                                        <li className="size-list">M</li>
                                        <li className="size-list">L</li>
                                        <li className="size-list">XL</li>
                                        <li className="size-list">XXL</li>
                                        <li className="size-list">3XL</li>
                                        <li><Link className="conditions" to="/">Size Chart</Link></li>
                                    </ul>
                                </div>
                            </div>


                            <div className="seller">
                                <p>Seller</p>

                                <div className="seller2">
                                <p className="policy"><Link className="conditions" to="/">Dasmalav</Link> <span className="No2">2.2 <img className="star" src={Star} alt="star"/></span></p>
                                <p className="policy2">14 days Return Policy</p>
                                </div>
                            </div>




                            <div className="details">
                                <h3>Product Details</h3>

                                <h3>+</h3>
                            </div>


                            <div className="reviews">
                                <div>
                                    <h2>Ratings & Reviews</h2>
                                </div>

                                <div className="and">
                                    <p className="No3">2.5 <img className="star" src={Star} alt="star"/></p>
                                    <p className="ratings4">4 ratings and 1 reviews</p>
                                </div>


                                <Link to="/" className="rate1">
                                <div className="rate">
                                    <p>Rate Product</p>
                                </div>
                                </Link>
                            </div>


                            <div className="quality-cloth">
                            <p className="No4">1 <img className="star" src={Star} alt="star"/></p>
                            <p className="poor">Quality of cloth was poor. So that i returned it!</p>
                            </div>



                            <div className="doubts">
                                <h3>Have doubts regarding this product?</h3>

                                <button><Link className="post" to="/">Post your question</Link></button>
                            </div>

                        </div>
                        </div>

                        <div>

                        </div>

                        <Footer/>


                    </div>
            

        </div>
}

export default Product;