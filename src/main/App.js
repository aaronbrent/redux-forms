import React from 'react';
import FormContainer from './form/FormContainer';
import CountriesContainer from './countries/CountriesContainer';

const App =(props)=>{
  return(
    <div>
      <FormContainer />
      <CountriesContainer />
    </div>
  )
}

export default App;
