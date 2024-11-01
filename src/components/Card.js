const Card = (props)=>{
  const {resData} = props
  // read abt optional chaining
  // const { } = resData?data; 4th episode 1:45 best practices to destructure
  console.log('resData:',resData)
  return (                                   
    <div className="card">
      <img alt='shahi_samosa' className='shsam' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId }/>
      <h3>{'Name: ' + resData.info.name}</h3>
      <h4>{'Locality: '+resData.info.locality}</h4>
      <h4>{'Cuisines: '+resData.info.cuisines}</h4>
      <h4>{'Avg rating: '+resData.info.avgRating}</h4>
      <h4>{'Total ratings: '+resData.info.totalRatingsString}</h4>
      <h4>{'Delivert time: '+resData.info.sla.deliveryTime}</h4>
      <h4>{'NextClose time: '+resData.info.availability.nextCloseTime}</h4>
    </div>
  ); 
}
export default Card;