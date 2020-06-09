import React, { Component }  from 'react';
import photo from './specs3.jpg'
import './Login.css';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom'
import {Container} from 'reactstrap'

class Login extends React.Component {

  constructor(props){
      super(props)
      this.state={name:'',password:""}
  }

    psw=(e)=>{
        console.log(e.target.value);
        this.setState({password:e.target.value});
    }
    email=(e)=>{
        console.log(e.target.value);
        this.setState({name:e.target.value});
    }

    submit=()=>{
        console.log(this.state.name)
        if(this.state.name!='niraj' || this.state.password!='1234')
        return false;

        localStorage.setItem('username', 'niraj');
    }

    render() {
      return (
          <div>
        <div class="bg-img">
        <div class="container shyam">
          <div className='d-flex justify-content-between'>
              <h1>Login</h1>
              <Link to='/signup'>
              <button type="button" className="btn  "
                style={{borderRadius:'' ,border:'black solid 1px',padding: '1px 25px'}}
                > SignUp
                </button>
                </Link>
          </div>
      
          <label for="text"><b>Name</b></label>
          <input type="text"  onChange={this.email} placeholder="name is niraj" name="name" required/>
      
          <label for="psw" ><b>Password</b></label>
          <input type="password" onChange={this.psw}  placeholder="password is 1234" name="psw" required/>
          <Link to='/home'>
                    
                    <button  onClick={this.submit} class="btn ram">Login </button>
             </Link> 
{/*           
             <Button onClick={this.submit} >
                        Submit
                    </Button> */}
        </div>
      </div>

      <Container>

          <h1 className='p-5'>
              Whatever Your Style, Travel Your Way  
          </h1>
       
       <p className='p-5'>
       Using their own words. Heroku is a platform that enables developers to build, run, and 
       operate applications entirely in the cloud. In other words. It provides a server for you where you can 
       run your application.
       Using their own words. Heroku is a platform that enables developers to build, run, and 
       operate applications entirely in the cloud. In other words. It provides a server for you where you can 
       run your application.Using their own words. Heroku is a platform that enables developers to build, run, and 
       operate applications entirely in the cloud. In other words. It provides a server for you where you can 
       run your application.
        If you don’t have an account yet go ahead and create one. It’s entirely free and they also
       </p>



       <p className='p-5'>
       Using their own words. Heroku is a platform that enables developers to build, run, and 
       operate applications entirely in the cloud. In other words. It provides a server for you where you can 
       run your application.
       Using their own words. Heroku is a platform that enables developers to build, run, and 
       operate applications entirely in the cloud. In other words. It provides a server for you where you can 
       run your application.Using their own words. Heroku is a platform that enables developers to build, run, and 
       operate applications entirely in the cloud. In other words. It provides a server for you where you can 
       run your application.
        If you don’t have an account yen words. Heroku is a platform that enables developers to build, run, and 
       operate applications entirely in the cloud. In other words. It provides a server for you where you can 
       run your application.Using their own words. Heroku is a platform that enables developers to build, run, and 
       operate applications entirely in the cloud. In other words. It provides a server for you where you can 
       run your application.
        If you don’t have an account yet go ahead and create one. It’s entirely free and they also
       </p>
       
      </Container>

      <div  className='footer'>
      <h1 className='pt-5 text-center'>
              Edunomics
          </h1>
          <p className='p text-center'>
              contact@edunomics.in
          </p>
      </div>

      </div>
      );
    }
  }

  export default Login;