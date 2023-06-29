import React from 'react';

import "./layout.css";
import LoginForm from './Login/login';

function Layout(){

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    // const handleLoginClick = () => {
    //     setIsLoggedIn(true);
    //   };

    return(
        <>
       <div id='main-box'>
       <div id='Boss'>
        <div className='container'>
            <div className="box1">
               <div className='text-all'>
               <div id='text-box-1'>
                   <text id='text-1'>
                     <text id="welocome" style={{color:"#BA8AC7"}}>Welcome to</text> <br/>
                     <text id="mocal">MoCal!</text>
                   </text>
                </div>

                <div id='text-box-2'>
                    <text id="only">Get Your First Month Free. Sign Up Now!</text>

                </div>   
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
                {/* {!isLoggedIn ? (
        <LoginForm onLoginClick={handleLoginClick} />
      ) : (
        <RegisterForm />
      )} */}
                <LoginForm/>

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
       </div>
       
        
        </>
    )

}

export default Layout;