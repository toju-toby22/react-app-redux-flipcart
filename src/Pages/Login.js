import Header from "../Components/Header.js"
import Footer from "../Components/Footer.js"
import {Link} from "react-router-dom"
import Listed from "../Components/list.js"
import Logs from "../Assets/login-img.png"

function Login(){
    return<div>
            <Header/>
                <Listed/>
            <div className="flip-login">
                    <div className="login-Box">

                                <div className="left">

                                  <div className="under-log">
                                  <h1>Login</h1>
                                    
                                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                                  </div>

                                        <div className="logs-img">
                                                <img src={Logs} alt=""/>
                                        </div>
                                </div>


                                {/* <div> */}
                                    
                                        <div className="Right">
                                        {/* <h1>Login</h1> */}

                                        <input
                                        type="email" 
                                        placeholder="Enter Email/Mobile number"
                                        />


                                        <input
                                        type="number"
                                        placeholder="Password"
                                        />


                                        <div className="privacy">
                                        <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>

                                        </div>

                                        <div className="btn">
                                                <Link to="/">
                                            <button className="login-btn">Login</button>

                                                </Link>
                                        </div>



                                        <div className="privacy">
                                        <p className="or">OR</p>

                                        </div>


                                        <div className="btn">
                                                <Link to="/">
                                            <button className="login-btn2">Request OTP</button>

                                                </Link>
                                        </div>




                                        <div className="privacy2">
                                        <Link className="or2" to="/Signup"><p className="or">New to Flipkart? Create an account</p></Link>

                                        </div>

                                        </div>

                                {/* </div> */}




                    </div>

            </div>

            <Footer/>

    </div>
}


export default Login;