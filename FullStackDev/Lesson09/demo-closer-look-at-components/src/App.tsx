import React from 'react';
import PanelA from './panels/PanelA/PanelA'
import PanelB from './panels/PanelB/PanelB'
import PanelC from './panels/PanelC/PanelC'
import PanelD from './panels/PanelD/PanelD'

const person = {
  fname: 'Kari', 
  lname: 'Nordmann'
}

const employee = {
  name: 'Jane Doe',
  salary: 20_000,
  skills: ['Spring Boot', 'React', 'TypeScript']
}

export default function App() {
  return (
    <React.Fragment>
      
      <PanelA />
      
      <PanelB msg="Hello!" />

      <PanelC fname="Kari" lname="Nordmann" />
      <PanelC fname={person.fname} lname={person.lname} />
      <PanelC {...person} />
      
      <PanelD {...employee} />
    
    </React.Fragment>
  )
}