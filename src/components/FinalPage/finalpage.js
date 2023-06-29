import React from "react";
import "./finalpage.css"
import { Link } from "react-router-dom";

function FinalPage(){
    return(<>
     <div id='Boss'>
            <div className='container'>
                <div className="box1">
                    <div id='text-box-1'>
                        <text id='text-1'>
                            <text id="welocome" style={{ color: "#BA8AC7" }}>Welcome to</text> <br />
                            <text id="mocal">MoCal!</text>
                        </text>
                    </div>

                    <div id='text-box-2'>
                        <text>Get Your First Month Free. Sign Up Now!</text>

                    </div>
                    <div id="img">
                        <div id='image1'> </div>
                    </div>


                    {/* //<img id="image1" src={myimage} alt='backgroung'/> */}
                </div>

                <div className="child2">
                    <div id="login form">

                        <div id="logo">
                            {/* <img src={logo} alt='logo'/> */}


                        </div>
                        <div id="form">


                            <div>
                                <form>

                                    <div style={{marginBottom:"30px"}}>

                                        <input type="text" placeholder='Company name'

                                            style={{
                                                paddingBottom: "10px",
                                                border: 'none',
                                                borderBottom: '1px solid black',
                                                background: 'none',
                                                outline: 'none',
                                                font: " Avenir",
                                                fontSize: "20px",
                                                width: '206px',
                                                marginRight: "30px"


                                            }} />



                                        <input type="text" placeholder='company website'

                                            style={{
                                                paddingBottom: "10px",
                                                border: 'none',
                                                borderBottom: '1px solid black',
                                                background: 'none',
                                                outline: 'none',
                                                font: " Avenir",
                                                fontSize: "20px",
                                                width: '206px',
                                                textAlign: "left"


                                            }} />
                                    </div>
                                    
                                    <div style={{marginBottom:"30px"}}>

                                        <input type="text" placeholder='country '

                                            style={{
                                                paddingBottom: "10px",
                                                border: 'none',
                                                borderBottom: '1px solid black',
                                                background: 'none',
                                                outline: 'none',
                                                font: " Avenir",
                                                fontSize: "20px",
                                                width: '206px',
                                                marginRight: "30px",
                                                position: "relative",


                                            }} />
                                            



                                        <input type="text" placeholder='city'

                                            style={{
                                                paddingBottom: "10px",
                                                border: 'none',
                                                borderBottom: '1px solid black',
                                                background: 'none',
                                                outline: 'none',
                                                font: " Avenir",
                                                fontSize: "20px",
                                                width: '206px',
                                                textAlign: "left"


                                            }} />
                                    </div>

                                    
                                    

                                    
                    
              
                        






                                    <div style={{marginTop:"180px"}}>
                                     <Link to="/register"><button id="button">Register</button></Link> 
                                    </div>
                                </form>

                                <div id="last-text">
                                    <p>
                                    By creating a MoCak account<br/>, you agree to <a href="*">MoCal’s Terms</a>  and <a href="*"> Privacy Policy</a>
                                    </p>

                                </div>








                            </div>

                        </div>




                    </div>

                </div>
                <div className="child3">
                    <div id="image3">
                    <div id='para'>
                    <p className="p" style={{textAlign:"left"}}>
                        We'll help you find the perfect time with your ,<br/>clients. Please enter your details to start with <br/>and we'll fit you right.
                    </p>

                    </div>


                    </div>
                </div>


            </div>

        </div>
    </>)
}

export default FinalPage;

