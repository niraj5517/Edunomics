import React from 'react';
import { Nav, NavItem, Navbar,NavLink,NavbarBrand,NavbarText } from 'reactstrap';
// import { callExpression } from '@babel/types';
import download from './cloud-storage.png';
import interview from './meeting.svg';
import practiseQuestion from './test.png';
import askQuestion from './box.png';

const Home = (props) => {
  return (

    <>

       <div className=''   style={{backgroundColor:'#0da199',width:'100%',minHeight:'52vh'}}>

     
       <div className='d-flex justify-content-center m-0 pt-5 row' 
         style={{backgroundColor:'',width:'100%',height:""}}>
       
     

     <div className=' d-flex justify-content-lg-end justify-content-xs-center col-lg-6 my-4 px-4  '
      style={{backgroundColor:''}}  >
     <div className='p-3 ml-5 d-flex justify-content-between align-items-center'
      style={{backgroundColor:'white',border:'black 1px solid',borderRadius:'25px',
      minWidth:'50%',height:'140px',paddingLeft:'20%'}}>
         
         <img src= {interview}
          alt="A Rectangle Image with SVG"
           height="80px" width="80px" />

<h4 style={{fontWeight:"bold",color:'grey',marginLeft:'15px'}}>All interactive Sessions</h4>
       
       </div>
     </div>
     <div className='d-flex justify-content-lg-start justify-content-xs-center  col-lg-6 my-4 px-4 '   >
     <div className='p-3 ml-5 d-flex justify-content-around align-items-center'
      style={{backgroundColor:'white',border:'black 1px solid',borderRadius:'25px',
      minWidth:'50%',height:'140px',paddingLeft:'20%'}}>

        <img src= {practiseQuestion}
          alt="A Rectangle Image with SVG"
          height="80px" width="80px"  />
          <h4 style={{fontWeight:"bold",color:'grey'}}>Practice Question</h4>
       
       </div>
     </div>
     <div className='d-flex justify-content-lg-end justify-content-xs-center col-lg-6 my-4 px-4 '   >
     <div className='p-3 ml-5 d-flex justify-content-around align-items-center'
      style={{backgroundColor:'white',border:'black 1px solid',borderRadius:'25px',
      minWidth:'50%',height:'140px',paddingLeft:'20%'}}>
       
       <img src= {download}
          alt="A Rectangle Image with SVG"
          height="80px" width="80px"  />
          <h4 style={{fontWeight:"bold",color:'grey'}}>Downloads</h4>

       </div>
     </div>
     <div className='d-flex justify-content-lg-start justify-content-xs-center  col-lg-6 my-4 px-4 '   >
     <div className='p-3 ml-5 d-flex justify-content-around align-items-center'
      style={{backgroundColor:'white',border:'black 1px solid',borderRadius:'25px',
      minWidth:'50%',height:'140px',paddingLeft:'20%'}}>
         
          <img src= {askQuestion}
          alt="A Rectangle Image with SVG"
          height="70px" width="70px"  />

          <h4 style={{fontWeight:"bold",color:'grey'}}>Ask Question</h4>
       
       </div>
     </div>

     
     
     

       </div>



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
     
     <div className=' d-flex justify-content-center col-sm-12 my-4 '   style={{backgroundColor:''}} >
     <div className='p-3 m-3 '
      style={{border:'black 1px solid',borderRadius:'25px',width:'80%',height:'200px'}}>
       <h5 className='text-center'>Topics Covered</h5>
       <hr/>
       </div>
     </div> 
     <h6 className='my-5 p-6'>
       Edunomics<small>contact@edunomics.in</small>
       </h6>
       

       </div>

      
       </>
  );
}

export default Home;