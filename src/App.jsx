
import React,{useState} from "react";
import Card from './components/Card'

const App = () => {
  const [name, setname] = useState('')
  const [ImgURL, setImgURL] = useState('');
  const [Role, setRole] = useState('');
  const [Disc, setDisc] = useState('');
  

  const newuser= JSON.parse(localStorage.getItem('user')) || []

    
  
  const [Alluser, setAlluser] = useState(newuser);
  
  const deleteUser=(idx)=>{
   const copyUser=[...Alluser]
    copyUser.splice(idx,1)
    setAlluser(copyUser);

    localStorage.setItem('user',JSON.stringify(copyUser))
    
    
  }

  
  

  

  const submithandler=(e)=>{
    e.preventDefault();
     const oldUser=[...Alluser]
     oldUser.push({name,ImgURL,Role,Disc})
     setAlluser(oldUser)

     localStorage.setItem('user',JSON.stringify(oldUser))
     
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
          return  <Card idx={idx} elem={elem} deleteUser={deleteUser}/>
          
            
            
          
          
           
         })}
         
       </div>
      
    </div>
  )
}

export default App

