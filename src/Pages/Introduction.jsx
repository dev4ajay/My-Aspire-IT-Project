import React from 'react'
import { IntroductionData } from "../components/data/about"
import { HiChevronDoubleRight } from 'react-icons/hi'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
const Introduction = () => {
    // console.log(IntroductionData)
    React.useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])
    return (
       <>
       <Navbar />
       <section>
            <div>
                {IntroductionData.map((data) => (
                    // console.log(data)
                    <>
                        <div>
                            <img src={data.Image} width="100%"></img>
                        </div>
                        <div className='container text-justify mt-5 mb-5'>
                            <h2 className='headline-left'>{data.heading1}</h2>
                            <h4 className='headline-brd'>{data.heading2}{" "}<span className='color-green'>{data.span}</span></h4>
                            <div>
                                <p>{data.boxPara}</p>
                            </div>
                            <p className='font-13'>{data.para}</p>
                            <h2>{data.heading3}</h2>
                            <p className='font-13 mb-1'><b><HiChevronDoubleRight className='mr-1' />Mastering the fundamentals of the subjects</b></p>
                            <p className='font-13 mb-1'><HiChevronDoubleRight className='mr-1' /><b>Study Material:</b> Comprehensive study material covering syllabus of competitive examinations</p>
                            <p className='font-13 mb-1'><HiChevronDoubleRight className='mr-1' /><b>Assessment:</b> Consists of topic wise concept tests and home assignments</p>
                            <p className='font-13 mb-1'><HiChevronDoubleRight className='mr-1' /><b>Faculty Team:</b> Comprises of experienced and committed faculty team of IIT graduates</p>
                            <p className='font-13 mb-1'><HiChevronDoubleRight className='mr-1' /><b>Doubt Sessions:</b>1 to 1 doubt sessions as per the convenience of the students.</p>
                            <p className='font-13 mb-1'><HiChevronDoubleRight className='mr-1' /><b>Personalized Learning:</b>  Focus on every student using specially designed software</p>
                            <p className='font-13 mb-1'><HiChevronDoubleRight className='mr-1' /><b>Focus on Competitive Exams:</b>Building right attitude and aptitude for competitive exams such as IIT,NEET, NDA, SAT, NTSE, Olympiads</p>
                            <p className='font-13 mb-1'><HiChevronDoubleRight className='mr-1' /><b>Innovative teaching approach:</b> Using an effective mix of blackboard teaching and activity based learning.</p>

                            <h4 class="mt-30 text-uppercase">ASPIRE IIT STRATEGY</h4>
                            <ul class="list theme-colored angle-double-right m-0">
                                <li class="mt-0"><strong>Strengthen the Foundation</strong><br /> At this tender age, most of the students are not aware of what to do. However, whatever choice they make in the future, will be cakewalk if they have a strong foundation and are well equipped with the fundamentals of the subjects. The rational approach and the logic which they will learn will help them in the long run. </li>


                                <li><strong>Make Learning Stress free</strong><br /> We believe that adopting a rote method of learning makes the subjects more challenging, and further adds to the stress. We encourage students to apply the concepts in real life so that they start to appreciate what they are learning. In addition to making learning fun, it also helps the students develop love for the subjects, and they are better positioned to take a decision regarding their career. </li>


                                <li><strong>Exposure at Young Age</strong><br /> We firmly believe that every child has an element of brilliance which can be brought to the forefront if he is made aware about his abilities. Confidence, self – belief and determination can bring out the best out of every student. This is where our IITian faculty team will play a big role. The faculty team will also act as mentors to help the student reach his desired goals. </li>

                                <li><strong>Effective Content and Assessment</strong><br /> The course content has been developed in a manner that will help the students to excel both in their schools and the various competitive exams they will face now and in future. The content is supplemented by specially designed tests and assignments to check the comfort of students with the concepts and applications.</li>

                                <li><strong>Doubt Sessions</strong><br /> Individual doubt lectures on a 1 to 1 basis are kept for students who have missed or not understood any concepts in the class. The doubt sessions will be held in school to avoid unnecessary travel for the student.</li>

                                <li><strong>Student Centric System</strong><br /> At ASPIRE IIT we keep student at the top of the learning pyramid and ensure that a healthy and conducive atmosphere for learning is developed through our feedback system. The feedback of the students about each faculty is taken to ensure there is no lapse in quality of teaching. Pre-requisite for Students We are looking for students who are willing to work hard, determined to achieve and inspire others by setting an example. Remember, no brilliance is too big to be compensated by hard work!!! </li>


                            </ul>

                            <h4 class="text-uppercase">Venue</h4>


                            <ul class="list theme-colored angle-double-right m-0">
                                <li class="mt-0"><strong>Aspire Academy, Near HDFC Bank,Phase-III BCS New Shimla-171009 Himachal Pradesh</strong></li>

                            </ul>

                            <h4 class="text-uppercase">Competitive Exams</h4>


                            <ul class="list theme-colored angle-double-right m-0">
                                <li class="mt-0"><strong>NTSE </strong></li>
                                <li><strong>NSTSE</strong>   </li>
                                <li><strong>Olympiads</strong> </li>
                                <li><strong>IIT (Mains)</strong>   </li>
                                <li><strong>IIT (Advanced)</strong>  </li>
                                <li><strong>NEET  </strong>  </li>
                                <li><strong>Other Science and aptitude based exams such as NDA, USPC, SAT, etc.</strong>   </li>

                            </ul>
                        </div>
                    </>
                ))}

            </div>
        </section>
        <Footer />
       </>
    )
}

export default Introduction