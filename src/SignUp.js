import React, { Component }  from 'react';
import photo from './specs3.jpg';
import {Container} from 'reactstrap'
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom'
import './Login.css';

class SignUp extends React.Component {

    constructor(props){
        super(props)
       
    }
  

      render() {
        return (
            <div className='d-flex justify-content-center align-items-center' 
            style={{height:'100vh',width:'100vw',backgroundColor:'black'}}>
                <div className='row m-0'>

                <div className='col-lg-6 m-0' 
                style={{maxHeight:'600px',maxWidth:'600px',minWidth:'400px',backgroundColor:'yellow'}}>
                <div className=" bg-img" >
        
               </div>
                </div>

                <div className="col-xs-12 m-0 col-lg-6 mohan " style={{}}>
          <div className='d-flex justify-content-between'>
              <h1>SignUp</h1>

              <Link to='/login' style={{color:'black'}}>
              <button type="button" className="btn  "
                style={{borderRadius:'' ,border:'black solid 1px',padding: '1px 9px'}}
                > Back to Login
                </button>
                {/* <h5>Back to login</h5> */}
                </Link>

          </div>
      
          <label for="text"><b>Name</b></label>
          <input type="text"  placeholder="Enter Name" name="name" required/>
          <label for="text"><b>Name</b></label>
          <input type="text"  placeholder="Enter Name" name="name" required/>
          <label for="text"><b>Name</b></label>
          <input type="text"  placeholder="Enter Name" name="name" required/>
      
          <label for="psw" ><b>Password</b></label>
          <input type="password"  placeholder="Enter Password" name="psw" required/>
          
                    
                   
            
{/*           
             <Button onClick={this.submit} >
                        Submit
                    </Button> */}
        </div>
        </div>
        </div>
        );
      }
    }
  
    export default SignUp;