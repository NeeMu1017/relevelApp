import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Loadingpage.css';



const Loadngpage = () => {

  const data =['All products','Electronic','Kicheware','sport'];
  
  
  const renndercomponent = ()=>{
    return(
      <div>
        <Navbar/>
       <div className='container'>
        <div className='row'>
          <div className='col-12'>
           <h2 className='home-title'> Wellcome to online shopping ...</h2>
          </div>
          <div className='col'>
            <div className='categore-list'>
              {/* <div className='categore-item'>
              <a href='/producuts'> All producuts</a>
              
              </div>
              <div className='categore-item'>
              <a href='/producuts'> Electronics</a>  
              </div> */}
              {
                data.map((category,item)=>(
                  <div className='categore-item' key={item}>{category}
              </div>
                ))
              }
            </div>
            
          </div>
        </div>
       </div>
      </div>
    )
  }
  return (
    
    renndercomponent()
  )
}

export default Loadngpage