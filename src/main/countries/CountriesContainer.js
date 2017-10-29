import React from 'react';
import {CountriesComponent} from './CountriesComponent'
import {Country} from './Country';

import {connect} from 'react-redux'

class CountriesContainer extends React.Component{
  constructor(){
    super();
    this.genList = this.genList.bind(this);
  }
  genList(){
    return this.props.countries.map((country,i)=>{
      return <Country key={country, i}
                      country={country} />
    })
  }
  render(){
    return(
      <div>
        {this.props.countries.map((country,i)=>{
          return <Country key={country, i}
                          country={country} />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return state
}

export default connect(mapStateToProps, {})(CountriesContainer);
