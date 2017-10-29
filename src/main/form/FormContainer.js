import React from 'react';
import FormComponent from './FormComponent';

import {connect} from 'react-redux';
import {countries} from '../../redux/actions';

class FormContainer extends React.Component{
  constructor(){
    super();
    this.state ={
      inputs:{
        name:'',
        imgUrl:''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    e.persist()
      this.setState((prevState)=>{
        return {
          inputs: {
            ...prevState.inputs,
            [e.target.name]: e.target.value
          }
        }
      })
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.addCountry(this.state.inputs);

    //addCountry function gets called here
    this.setState({
      inputs: {
        name:'',
        imgUrl: ''
      }
    })
  }
  render(){

    console.log(this.props)
    return (
      <FormComponent handleSubmit={this.handleSubmit}
        inputs={this.state.inputs}
        handleChange={this.handleChange} />
    )
  }
}

export default connect(null, countries)(FormContainer);
