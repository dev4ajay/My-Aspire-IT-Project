import React from 'react'
import Accordion from '../Header/Accordion copy'
import {accordionData32} from "../UI/utils/content"
const Navbar2 = () => {
  return (
    <div className="accordion2">
        {accordionData32.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
  )
}

export default Navbar2