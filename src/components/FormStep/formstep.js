import React from "react";
import "./formstep.css"
import { Link } from "react-router-dom";

function FromStep() {

    return (<>

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

                                    <div style={{ marginBottom: "30px" }}>

                                        <input type="text" placeholder='first name'

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



                                        <input type="text" placeholder='last name'

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

                                    <div style={{ marginBottom: "30px" }}>

                                        <input type="text" placeholder='phone'

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



                                        <input type="text" placeholder='email'

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


                                    <div style={{ marginBottom: "30px" }}>

                                        <input type="text" placeholder='passWord'

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



                                        <input type="text" placeholder='confirm password'

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


                                    <hr
                                        style={{
                                            color: "#707070",
                                            backgroundColor: "#707070",
                                            paddingRight: "100px",

                                            borderColor: "#707070",

                                            width: "189px",
                                            hight: "10px",

                                            alignItems: "center",

                                            marginTop: "10px"
                                        }}
                                    />

                                    <div >
                                        <ul id="list" style={{ listStyleType: 'circle', display: 'inline-block', textAlign: "left", paddingRight: "120px", color: "#E1003E" ,fontSize:"15px"}}>
                                            <li>Use a few words, avoid common phrases.</li>
                                            <li>No need for symbols, digits, or uppercase letters.</li>

                                        </ul>

                                    </div>







                                    <div style={{ marginTop: "50px" }}>
                                        <Link to="/finalpage"><button id="button">Continue</button></Link>
                                    </div>
                                </form>








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

export default FromStep;
