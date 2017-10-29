import React from 'react';

export const Country=(props)=>{
  const style = {
   width: 500,
   height: 'auto'
  }
  return(
    <div>
      <h4>{props.country.name}</h4>
      <img style={style} src={props.country.imgUrl} alt="boohoo" className="img-responsive"/>
    </div>
  )
}
