import React from 'react'
import Accordion from '../Header/Accordion copy 2'
import {accordionData323} from "../UI/utils/content"
const Navbar2 = () => {
  return (
    <div className="accordion2">
        {accordionData323.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
  )
}

export default Navbar2