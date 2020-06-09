import React, { Component }  from 'react';
import photo from './specs3.jpg'
import {Container} from 'reactstrap'

class Login extends React.Component {

    render() {
      return (
          <div className='d-flex flex-column' style={{minHeight:'100vh' ,width:'100vw',overflowX:'hidden'}}>
         {/* <div className='' style={{height:'600px' ,width:'100%'}}>

             <img
             
             src={photo}
             width='100%' height="100%"
             />

         </div> */}
         <Container className='' style={{minHeight:'10px'}}>
             <h1 className='m-5'> Wherever Your Style , Travel Your Way</h1>

             <p className='m-4'>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting 
                 industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                  What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum 
                  has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of
                   type and scrambled it to make a type specimen book it has?
                  </p>
                  <p className='m-4'>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting 
                 industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                  What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum 
                  has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of
                   type and scrambled it to make a type specimen book it has?
                  </p>
                  <p className='m-4'>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting 
                 industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                  What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum 
                  has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of
                   type and scrambled it to make a type specimen book it has?
                  </p>
                  
                  <p className='m-4'>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting 
                 industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                  What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum 
                  has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of
                   type and scrambled it to make a type specimen book it has?
                  </p>
             
                

             <p className='m-4'>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting 
                 industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                  What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum 
                  has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of
                   type and scrambled it to make a type specimen book it has?
                  </p>
              
                  {/* <div className='' style={{height:'600px' ,width:'100%'}}>

             <img
             
             src={photo}
             width='100%' height="100%"
             />

         </div> */}
                  


         </Container>
          </div>
      );
    }
  }

  export default Login;