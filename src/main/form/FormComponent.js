import React from 'react';

const FormComponent =(props)=>{
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input onChange={props.handleChange} value={props.inputs.name} name='name' type='text' placeholder='Country Name'/>
        <input onChange={props.handleChange} value={props.inputs.imgUrl} name='imgUrl' type='text' placeholder='Flag Image Url'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormComponent;
