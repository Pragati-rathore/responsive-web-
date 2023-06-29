import React from 'react';
import Gmail from "../../images/Group 15828.png";
import Microsft from "../../images/Group 15829.png";
import "./register.css";
import { Link } from 'react-router-dom';

function RegisterForm() {
   

    return <>

<div id='Boss'>
        <div className='container'>
            <div className="box1">
                <div id='text-box-1'>
                   <text id='text-1'>
                     <text id="welocome" style={{color:"#BA8AC7"}}>Welcome to</text> <br/>
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
                <div className='email'>
                    <input type="text" placeholder='enter email address'

                        style={{
                            border: 'none',
                            borderBottom: '1px solid black',
                            background: 'none',
                            outline: 'none',
                            font: " Avenir",
                            fontSize: "20px",
                            width: '400px',


                        }} />

                </div>




                <div>
                    <Link to="/formstep"><button id="button">Get Started</button></Link>
                </div>
            </form>

            <div id='or'>
                <span style={{ marginRight: "20px" }}>
                    <hr
                        style={{
                            color: "#707070",

                            borderColor: "#707070",

                            width: "180px",
                            hight: "1px",
                            boxSizing: "inline",
                            textAlign: "left",
                            display: "inline-block",
                            marginTop: "10px",
                            marginLeft: "5px"
                        }}
                    />
                </span>


                <span style={{ fontSize: "22px" }}>OR</span>

                <span style={{ marginLeft: "20px" }}>
                    <hr
                        style={{
                            color: "#707070",

                            borderColor: "#707070",

                            width: "180px",
                            hight: "1px",
                            boxSizing: "inline",
                            textAlign: "left",
                            display: "inline-block",
                            marginTop: "10px"
                        }}
                    />
                </span>
            </div>

            <div id='Buttoms'>
                <div >
                    <img src={Gmail} alt='gmail' style={{ marginRight: "10px" }} />
                </div>

                <div id='mic'>
                    <img src={Microsft} alt='microsoft' />
                </div>


            </div>

            

            <div style={{ display: 'flex', alignItems: 'center' , marginTop:"40px", marginLeft:"110.5px",color: "#707070",fontSize:"20px"}}>
                <span>Already have an account?</span>
               <Link to="/"> <button
               style={{
                
               }} id="fornt-size">Login</button> </Link>
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
       
    
    







       
    </>
}

export default RegisterForm;