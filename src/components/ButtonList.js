import React from 'react'
import Button from './Button'

const ButtonList = () => {
  // buttonList IS BASICALLY COLLECTIONS OF BUTTONS AND FOR THAT FORST WE NEED TO MAKE 
  // BUTTOND COMPONENY AND A
  return (
    <div className="flex  overflow-hidden w-50" >
      <Button  name={"All"}/>
      <Button  name={"Mixes"} />
      <Button  name={"Computer Programming"}/>
      <Button  name={"Lectures"}/>
      <Button  name={"Music"}/>
      <Button  name={"Motivation"} />
      
      
    </div>
  )
}

export default ButtonList