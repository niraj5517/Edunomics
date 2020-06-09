import React,{ useState } from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import { Nav, NavItem, Navbar,NavLink,NavbarBrand,NavbarText , DropdownToggle, DropdownMenu, DropdownItem,UncontrolledDropdown} from 'reactstrap';
import Home from './Home';
import Downloads from './Downloads';
import Sessions from './Sessions';
import Button from './Button'
// import { callExpression } from '@babel/types';

const App = (props) => {
 
  


  return (

    <div className='' 
    style={{backgroundColor:'',minHeight:'100vh',maxWidth:'100vwx',overflow:'hidden',}}>

      <Navbar color="light" light expand="sm" 
      style={{backgroundColor:'',display:'flex',justifyContent:'between'}} 
      className="d-flex justify-content-between" >
        <NavbarBrand  className=' ml-2'
         style={{color:'grey',fontWeight:'bold',fontSize:'30px',backgroundColor:''}}>
           Welcome to Edunomics
           </NavbarBrand>
             
           <Switch>
           
           <Route exact path='/sessions' component={Button} />

            </Switch>
          
          
          <NavbarText>

          <UncontrolledDropdown >
      <DropdownToggle caret>
        My Account
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem >Profile</DropdownItem>
        <DropdownItem  onClick={()=>localStorage.removeItem('username')}>

        <Link to="/login" > Logout </Link>
          
          </DropdownItem>
        
      </DropdownMenu>
    </UncontrolledDropdown>
            
           
          {/* <Link to="/login" >
          <button type="button" className="btn px-4 py-2 mr-5 "
           onClick={()=>localStorage.removeItem('username')}
          style={{borderRadius:'18px' ,border:'black solid 1px',}}
          > My Account
          </button>
          </Link> */}
          </NavbarText>
      
      </Navbar>
      
     <div className="row">

       <div className="d-flex-block col-sm-3  yellow"
        style={{backgroundColor:'grey',width:'100%',minHeight:'50vh'}}>
        
       <Nav className="" vertical>
        <NavItem className=' mt-4' >
          <NavLink ><Link to='/home'><h3 className='font-weight-bold text-white'>Home</h3></Link></NavLink>
        </NavItem>
        <NavItem className=' my-3'>
        <NavLink  ><Link to='/sessions' ><h3 className='font-weight-bold text-white'>Sessions</h3></Link></NavLink>
        </NavItem>
        <NavItem className=' my-3'>
        <NavLink ><Link to='/downloads'><h3 className='font-weight-bold text-white'>Downloads</h3></Link></NavLink>
        </NavItem>
        <NavItem className=' my-3'>
        <NavLink ><h3 className='font-weight-bold text-white'>Settings</h3></NavLink>
        </NavItem>
        <NavItem className=' my-3'>
        <NavLink ><h3 className='font-weight-bold text-white' >About</h3></NavLink>
        </NavItem>
      </Nav>

       </div>

       <div className="col-sm-9 mt-0 p-0"  
       style={{backgroundColor:'',minHeight:'50vh',width:'100%'}}>
     <Switch>
       <Route path="/home" component={Home}/>
       <Route path="/sessions" component={Sessions}/>
       <Route path="/downloads" component={Downloads}/>
       {/* <Route path="/home" component={Home}/> */}
     </Switch>
     {/* <Home/> */}
     {/* <Downloads/> */}
     {/* <Sessions/> */}
      
       </div>


     </div>

    </div>
    // <div >
     
      
      
    // </div>
  );
}

export default App;