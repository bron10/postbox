import React from 'react';
import ComposeModal from '../emails/compose-modal'

function ComponentRegistry({data}:any) {
  let componentElem = null;
  const {type, ...otherInfo} = data;  
  switch(type){
    case 'COMPOSE_EMAIL':
      componentElem =  <ComposeModal modalInfo = {otherInfo}/>
    break;
  }
return (<>{componentElem}</>)  
}

export default ComponentRegistry;