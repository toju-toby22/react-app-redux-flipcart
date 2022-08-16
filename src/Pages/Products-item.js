// import clayboy from "../Assets/clayboy.jpeg";
import assured from "../Assets/assured.png";
import { Link } from "react-router-dom"


const ItemsList = (props) => {
    return <div>
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



                    {props.Card.map((pro, i) => {
                        return <div>
                             <Link className="box-link" to="/Product">
                              <div>

                                <img className="clay" src={`http://localhost:4000/${pro.bannerImage}`} alt="claybpy" />
                                <p className="dry">Dryfitbazar</p>
                                <div className="carg">
                                    <p>Men Cargos</p>
                                    <img className="assured" src={assured} alt="assured" />
                                </div>
                                <p className="span">₹749        ₹1,599      <span>53% off</span> </p>
                            </div>
                             </Link>
                            </div>
                    })}






            </div>


        </div>
    </div>
}

export default ItemsList;