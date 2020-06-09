import React from 'react';
import { Nav, NavItem, Navbar,NavLink,NavbarBrand,NavbarText } from 'reactstrap';


const Downloads = (props) => {
  return (

    <>

       <div className='p-5 '   style={{backgroundColor:'#0da199',width:'100%',height:'62vh'}}>
           <h3 className='font-weight-bold text-white'>Download Previous Year Qustion Paper</h3>

       </div>
       <div className='d-flex justify-content-around m-0 pt-5 row' 
         style={{backgroundColor:'white',width:'100%',minHeight:"10px"}}>
       
     <div className=' col-xl-6 my-4 px-4 '   >
     <div className='p-3 mx-auto'
      style={{border:'black 1px solid',borderRadius:'25px',width:'80%',height:'200px',paddingLeft:'20%'}}>
       <h5>Topics Covered</h5>
       <hr/>
       </div>
     </div>

     <div className=' col-xl-6 my-4 px-4 '   >
     <div className='p-3 ml-5'
      style={{border:'black 1px solid',borderRadius:'25px',width:'80%',height:'200px',paddingLeft:'20%'}}>
       <h5>Topics Covered</h5>
       <hr/>
       </div>
     </div>
{/*      
     <div className=' d-flex justify-content-center col-sm-12 my-4 '   style={{backgroundColor:''}} >
     <div className='p-3 m-3 '
      style={{border:'black 1px solid',borderRadius:'25px',width:'80%',height:'200px'}}>
       <h5 className='text-center'>Topics Covered</h5>
       <hr/>
       </div>
     </div>  */}

     <div className='pt-6 mt-6'>
     <h6 className='mt-5 pt-6 text-center'>
       Edunomics<small>contact@edunomics.in</small>
       </h6>
     </div>

     
       

       </div>

      
       </>
  );
}

export default Downloads;