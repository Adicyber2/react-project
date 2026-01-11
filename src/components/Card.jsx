

const Card = (props) => {
    console.log(props.name);
    
  return (
    <div>
      <div className='card'  >
               <img src={props.elem.ImgURL} alt="" />
               <h1>{props.elem.name}</h1>
               <h3>{props.elem.Role}</h3>
              <p>{props.elem.Disc}</p>
              <button className="remove" onClick={()=>{
                props.deleteUser(props.idx)
              }}>Remove</button>
            </div>
    </div>
  )
}

export default Card
