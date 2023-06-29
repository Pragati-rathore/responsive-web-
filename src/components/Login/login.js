import React from 'react';
import Gmail from "../../images/Group 15828.png";
import Microsft from "../../images/Group 15829.png";
import "./login.css";
import { Link } from 'react-router-dom';


function LoginForm() {
 
return <>

        <div>
            <form>
                <div className='email'>
                    <input type="text" placeholder='enter email address / phone number'

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
                <div className='email' style={{ paddingTop: "35px" }}>
                    <input type="text" placeholder='enter password'

                        style={{
                            border: 'none',
                            borderBottom: '1px solid black',
                            background: 'none',
                            outline: 'none',
                            font: " Avenir",
                            fontSize: "20px",
                            width: '400px',
                            textAlign: "left"


                        }} />

                </div >


                <div id='forget'>
                    <p>
                        <a href="https://www.example.com">Forget Password?</a>
                    </p>
                </div>

                <div>
                  <button id="button">Log In</button>
                </div>
            </form>

            <div id='or'>
                <span style={{marginRight:"20px"}}>
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
                            marginLeft:"5px"
                        }}
                    />
                </span>


                <span style={{fontSize:"22px"}}>OR</span>

                <span style={{marginLeft:"20px"}}>
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
                <span >
                <img src={Gmail} alt='gmail' style={{marginRight:"10px"}}/>
                </span>

                <span>
                <img src={Microsft} alt='microsoft'/>
                </span>
               

            </div>

            {/* <div id='user'>
                <p>
                New User? <button onClick={handleLoginClick}>Register!</button>
                
                </p>

            </div> */}
            <div style={{ display: 'flex', alignItems: 'center' ,color: "#707070" ,marginLeft:"170px"}}>
                <span style={{ fontSize:"20px"}}>New User? </span>
               <Link to="/register"> <button style={{
                    marginLeft: '8px', border: 'none',
                   
                    background: 'none',
                  
                    font: " Avenir",
                    textDecoration: "underline",

                    height: "55px",
                    color: "#0073E6",
                    fontSize: "20px",
                }}   >Register!</button></Link>
            </div>

        </div>
    </>
}

export default LoginForm;