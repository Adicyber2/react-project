import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './components/Card';
const App = () => {
  
  const [name, setname] = useState([]);

  const getData= async()=>{
    const respons= await axios.get('https://fakestoreapi.com/products/')
    setname(respons.data)
    
    
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <div className='main'>

      
       
      {name.map(function(elem,idx){
        return <div key={idx}>
         <Card name={elem.title} image={elem.image} disc={elem.description} price={elem.price}/>
        </div>
        
      })}
    </div>
  )
}

export default App

