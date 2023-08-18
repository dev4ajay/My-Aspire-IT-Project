import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
import { ADMISSIONDATA } from "../components/data/about"
const ADMISSION = () => {
    React.useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])
    // console.log(AboutData)
    return (
   <>
   <Navbar/>
        <section>
            <div>
                {ADMISSIONDATA.map((data) => (
                    // console.log(data)
                    <>
                        <div>
                            <img src={data.Image}></img>
                        </div>
                        <div className='container text-justify mt-5 mb-5'>
                            <h2 className='headline-left'>{data.heading1}</h2>
                            <h4 className='headline-brd'>{data.heading2}{" "}<span className='color-green'>{data.span}</span></h4>
                            <div>
                                <p className='hero hero-default text-white'>{data.boxPara}</p>
                            </div>
                            <p className='font-13'>{data.para}</p>
                            <p className='font-13'>{data.para2}</p>
                            <p className='font-13'>{data.para3}.<span><b>{data.para3Span}</b></span></p>
                            <p className='font-13'>{data.para4}</p>
                            <p className='font-13'>{data.para5}</p>
                            <blockquote><em>Dream is not that which
                                you see while sleeping; it is
                                something that does not let
                                you sleep.</em> <small><em>-A.P.J. Abdul Kalam</em></small>
                            </blockquote>
                        </div>
                    </>
                ))}

            </div>
        </section>
        <Footer />
   </>
    )
}

export default ADMISSION