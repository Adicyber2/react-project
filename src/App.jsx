
import React,{useState} from "react";


const App = () => {
  const [name, setname] = useState('')
  const [ImgURL, setImgURL] = useState('');
  const [Role, setRole] = useState('');
  const [Disc, setDisc] = useState('');


  const [Alluser, setAlluser] = useState([]);
  
  const deleteUser=(idx)=>{
    const copyUser=[...Alluser]
    copyUser.splice(idx,1)
    setAlluser(copyUser)
    
  }
  
  
  


  const submithandler=(e)=>{
    e.preventDefault();
     const oldUser=[...Alluser]
     oldUser.push({name,ImgURL,Role,Disc})
     setAlluser(oldUser)
   
    setname('')
    setImgURL('')
    setRole('')
    setDisc('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e);
      }}>
        <input type="text" value={name} onChange={(e)=>{
          setname(e.target.value)
          
        }} placeholder="Enter Name" />
        <input type="text" value={ImgURL} onChange={(e)=>{
          setImgURL(e.target.value)
          
        }} placeholder="Enter Img URL"/>
        <input type="text" value={Role} onChange={(e)=>{
          setRole(e.target.value)
          
        }} placeholder="Enter Role"/>
        <input type="text" value={Disc} onChange={(e)=>{
          setDisc(e.target.value)
          
        }} placeholder="Enter Discription"/>
        <button className="submit" >Submit</button>
       </form>
       <div className="contaner">
         {Alluser.map(function(elem,idx){
          return  <div key={idx} className='card'>
               <img src={elem.ImgURL} alt="" />
               <h1>{elem.name}</h1>
               <h3>{elem.Role}</h3>
              <p>{elem.Disc}</p>
              <button className="remove" onClick={deleteUser}>Remove</button>
            </div>
          
          
           
         })}
         
       </div>
      
    </div>
  )
}

export default App

