import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header.js"
import Footer from "../Components/Footer.js";
import Listed from "../Components/list.js";

import Right from "../Assets/next (1).png";
import ItemsList from "./Products-item.js";




function List() {

    const [products, setProducts]=useState([])

        useEffect(()=>{
            axios.get("http://localhost:4000/api/card-table").then((res)=>{
                console.log(res.data);
                setProducts(res.data);
            }).catch((err)=>{

            })

        }, [])


    return <div>
        <Header />
        <Listed />

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
                            <img className="next" src={Right} alt="next" />
                        </div>
                    </Link>

                    <Link className="arrow" to="/" >
                        <div className="drop-down">
                            <p>CUSTOMER RATINGS</p>
                            <img className="next" src={Right} alt="next" />

                        </div>
                    </Link>

                    <Link className="arrow" to="/" >
                        <div className="drop-down">
                            <p>SIZE</p>
                            <img className="next" src={Right} alt="next" />

                        </div>
                    </Link>

                    <Link className="arrow" to="/" >
                        <div className="drop-down">
                            <p>OFFERS</p>
                            <img className="next" src={Right} alt="next" />

                        </div>
                    </Link>



                    <Link className="arrow" to="/" >
                        <div className="drop-down">
                            <p>DISCOUNT</p>
                            <img className="next" src={Right} alt="next" />

                        </div>
                    </Link>


                    <Link className="arrow" to="/" >
                        <div className="drop-down">
                            <p>GENDER</p>
                            <img className="next" src={Right} alt="next" />

                        </div>
                    </Link>


                    <Link className="arrow" to="/" >
                        <div className="drop-down">
                            <p>PATTERN</p>
                            <img className="next" src={Right} alt="next" />

                        </div>
                    </Link>



                    <Link className="arrow" to="/" >
                        <div className="drop-down">
                            <p>COLOR</p>
                            <img className="next" src={Right} alt="next" />

                        </div>
                    </Link>



                    <Link className="arrow" to="/" >
                        <div className="drop-down">
                            <p>THEME</p>
                            <img className="next" src={Right} alt="next" />

                        </div>
                    </Link>

                    <Link className="arrow" to="/" >
                        <div className="drop-down">
                            <p>FABRIC</p>
                            <img className="next" src={Right} alt="next" />

                        </div>
                    </Link>


                    <div className="drop-down">
                        <p>AVAILABILTY</p>
                        <img className="next" src={Right} alt="next" />

                    </div>


                </div>


                <div className="two-sides2">
                {products.length<1?<h3 className="load">Loading Data</h3>:<ItemsList Card={products} />}
                </div>
            </div>
        </div>

        <Footer  />

    </div>

}

export default List;



