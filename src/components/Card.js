const Card = (props)=>{
  const {resData} = props
  const {name, rating, review} = resData;
  return (                                   
    <div className='card'>
      <img alt='shahi_samosa' className='shsam' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_m0320GiUdy3G31957ywUwWMTlanIXm5NA&s'/>
      <h3>{name}</h3>
      <h4>{rating}</h4>
      <h4>{review}</h4>
    </div>
  ); 
}
export default Card;