import React from 'react';
import { BuilderComponent, builder } from '@builder.io/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Put your API key here
builder.init('bb0c7b3e04054467b3ddccdf0f5c334d')

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
 const Builder = () => {
    const location = useLocation()
  const [builderContentJson, setBuilderContentJson] = useState(null)
  useEffect(() => {
    builder.get('page', { url: location.pathname })
      .promise().then(setBuilderContentJson)
  }, [location.pathname])
  return  (<React.Fragment>
 <BuilderComponent model='page' content={builderContentJson}/>
 </React.Fragment>)
}
export default Builder;
