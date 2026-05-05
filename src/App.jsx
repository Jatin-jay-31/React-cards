import React, { useState } from 'react'
import Card from './components/card'
import amazon from './assets/amazon.jpg'
import google from './assets/google.jpg'
import dribble from './assets/dribble.jpg'
import apple from './assets/apple.jpg'
import airbnb from './assets/airbnb.jpg'
import figma from './assets/figma.jpg'
import meta from './assets/meta.jpg'
import microsoft from './assets/microsoft.jpg'


const App = () => {
  const data=[{Logo: amazon,Company:'Amazon',Posted:'30 days ago',Role:'Senior UI/UX Designer',Tags:{Tag1:'Part-Time',Tag2:'Senior Level'},Wage: '$120/hr',Location:'Mumbai, India'},
  {Logo: google,Company:'Google',Posted:'30 days ago',Role:'Graphic Designer',Tags:{Tag1:'Part-Time',Tag2:'Flexible Schedule'},Wage: '$150-220k',Location:'Kochi, India'},
  {Logo: dribble,Company:'Dribble',Posted:'18 days ago',Role:'Senior Motion Designer',Tags:{Tag1:'Contract',Tag2:'Remote'},Wage: '$85/hr',Location:'Chennai, India'},
  {Logo: figma,Company:'Figma',Posted:'5 days ago',Role:'UX Designer',Tags:{Tag1:'Full-Time',Tag2:'In office'},Wage: '$200-250k',Location:'Bangalore, India'},
  {Logo: airbnb,Company:'Airbnb',Posted:'10 days ago',Role:'Junior UI/UX Designer',Tags:{Tag1:'Contract',Tag2:'Remote'},Wage: '$100/hr',Location:'Delhi, India'},
  {Logo: figma,Company:'Apple',Posted:'15 days ago',Role:'Graphic Designer',Tags:{Tag1:'Full-Time',Tag2:'Flexible Schedule'},Wage: '$85-120k',Location:'Kerala, India'},
{
  Logo: meta,
  Company: 'Meta',
  Posted: '7 days ago',
  Role: 'Frontend Developer',
  Tags: { Tag1:'Full-Time', Tag2:'Remote'},
  Wage: '$140-180k',
  Location: 'Hyderabad, India'
},
{
  Logo: microsoft,
  Company: 'Microsoft',
  Posted: '12 days ago',
  Role: 'Software Engineer',
  Tags: {Tag1:'Full-Time', Tag2: 'Hybrid'},
  Wage: '$130-170k',
  Location: 'Noida, India'
}]
  return (
    <>
    {data.map((info,index)=>{
      return (<Card key={index} logo={info.Logo} company={info.Company} posted={info.Posted} role={info.Role} tag1={info.Tags.Tag1} tag2={info.Tags.Tag2} wage={info.Wage} location={info.Location} />)
      
    })}
    </>
  )
}

export default App



