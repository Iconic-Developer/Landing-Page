import React from 'react'
import SkilledManpower from './Catagory/SkilledManpower'
import UnskilledManpower from './Catagory/UnskilledManpower'
import ContractBase from './Catagory/ContractBase'
import ProjectBase from './Catagory/ProjectBase'
import TurnkeyLabour from './Catagory/TurnkeyLabour'

const ServiceTemplate = () => {
  return<>
        <SkilledManpower />
        <UnskilledManpower />
        <ProjectBase />
        <TurnkeyLabour />
        <ContractBase />
        
  
  
  </>
}

export default ServiceTemplate