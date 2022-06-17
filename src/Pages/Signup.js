import Header from "../Components/Header.js"
import Footer from "../Components/Footer.js"
import {Link} from "react-router-dom"
import Listed from "../Components/list.js"
import Logs from "../Assets/login-img.png"




function Sign(){
    return<div>
            <Header/>
                <Listed/>
            <div className="flip-login">
                    <div className="login-Box">

                                <div className="left">

                                  <div className="under-log">
                                  <h1>Looks Like your new here!</h1>
                                    
                                    <p>Sign up with your mobile number to get started</p>
                                  </div>

                                  <div className="logs-img">
                                                <img src={Logs} alt=""/>
                                        </div>
                                </div>


                                {/* <div> */}
                                    
                                        <div className="Right2">
                                        {/* <h1>Login</h1> */}

                                        <input
                                        type="number" 
                                        placeholder="Enter Mobile number"
                                        />


                                        <div className="div-use">
                                        <p>By continuing, you agree to Flipkart's <span><Link className="use" to="/">Terms of Use</Link></span> and <span><Link className="use" to="">Privacy Policy.</Link></span></p>

                                        </div>

                                        <div className="btn">
                                                <Link to="/">
                                            <button className="login-btn">Continue</button>

                                                </Link>
                                        </div>


                                        <div className="btn">
                                                <Link to="/">
                                            <button className="login-btn2">Existing User? Login</button>

                                                </Link>
                                        </div>

                                        </div>

                                {/* </div> */}




                    </div>

            </div>

            <Footer/>

    </div>
}


export default Sign;