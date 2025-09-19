    import react from 'react';
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
    import CGTIMid1 from '../assets/CGTIMid2.png';
    import CGTIMid2 from '../assets/CGTIMid2.1.png';


    const HomeMid2 = ({}) => {
        return(
            <section className='pt-15'>
                {/* First Section Start  */}
                <div className='flex flex-col lg:flex-row  w-full px-8 lg:gap-x-4'>
                    <div className='flex justify-center lg:w-[90%] mb-8 lg:mb-0'>
                        <img src={CGTIMid1} alt="CGTI Image" className='w-full max-w-md lg:max-w-full rounded-xl lg:mt-8'/>
                    </div>
                    <div className='space-y-6  lg:w-[90%] text-justify'>
                        <span className='lg:text-4xl font-extrabold'>What we promise for the</span>
                        <br />
                        <span className='lg:text-4xl font-extrabold'>bright future of the student</span>
                        <p className='lg:w-[90%] mt-5 mb-10'>we are always supportive of empowering our students with the necessary knowledge, skills and opportunities for a bright and successful future.</p>
                        <ul className='space-y-5 lg:w-[88%]'>
                            <li className='flex'> <FontAwesomeIcon icon={faCircleCheck} size="xl" style={{color: "#74C0FC",}} className=''/><span className='ml-15'>Quality Education: We provide high-quality education with a focus on the latest curriculum and expert instructors dedicated to your success.</span></li>
                            <li className='flex'><FontAwesomeIcon icon={faCircleCheck} size="xl" style={{color: "#74C0FC",}} className=''/><span className='ml-15'>Industry Relevance: Our courses are designed to meet the demands of the ever-evolving technology industry, ensuring that you are well prepared for real-world challenges.</span></li>
                            <li className='flex'><FontAwesomeIcon icon={faCircleCheck} size="xl" style={{color: "#74C0FC",}} className=''/><span className='ml-15 tracking-2'>Flexibility: With flexible scheduling options including 1 Year Diploma, 6 Months Certificate Course, Short Term and Professional Course, we meet your unique needs and commitments.</span></li>
                        </ul>
                    </div>
                </div>
                {/* Second Section Start */}
                <div>

                </div>
            </section>
        )
    }
    export default HomeMid2;