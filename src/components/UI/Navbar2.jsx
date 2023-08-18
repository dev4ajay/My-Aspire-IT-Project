import React from 'react'
import Accordion from '../Header/Accordion'
import {accordionData} from "../UI/utils/content"
const Navbar2 = () => {
  return (
    <div className="accordion2">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
  )
}

export default Navbar2