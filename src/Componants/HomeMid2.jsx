    import react from 'react';
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
    import CGTIMid1 from '../assets/CGTIMid2.png';
    import CGTIMid2 from '../assets/CGTIMid2.1.png';


    const HomeMid2 = ({}) => {
        return(
            <section className='pt-15'>
                {/* First Section Start  */}
                <div className='grid lg:grid-cols-2  w-full px-8 lg:gap-x-4'>
                    <div className='flex justify-center lg:w-[full%] mb-8 lg:mb-0'>
                        <img src={CGTIMid1} alt="CGTI Image" className='w-full max-w-md lg:max-w-full rounded-xl lg:mt-4'/>
                    </div>
                    <div className='space-y-6 text-justify'>
                        <span className='lg:text-4xl font-bold tracking-[2px]'>What we promise for the</span>
                        <br />
                        <span className='lg:text-4xl font-bold'>bright future of the student</span>
                        <p className='mt-5 mb-10 lg:w-[88%] tracking-[1px]'>we are always supportive of empowering our students with the necessary knowledge, skills and opportunities for a bright and successful future.</p>
                        <ul className='space-y-5 lg:w-[90%]'>
                            <li className='flex tracking-[1px]'> <FontAwesomeIcon icon={faCircleCheck} size="xl" style={{color: "#74C0FC",}} className=''/><span className='ml-15'><strong>Quality Education:</strong> We provide high-quality education with a focus on the latest curriculum and expert instructors dedicated to your success.</span></li>
                            <li className='flex tracking-[1px]'><FontAwesomeIcon icon={faCircleCheck} size="xl" style={{color: "#74C0FC",}} className=''/><span className='ml-15'><strong>Industry Relevance:</strong> Our courses are designed to meet the demands of the ever-evolving technology industry, ensuring that you are well prepared for real-world challenges.</span></li>
                            <li className='flex tracking-[1px]'><FontAwesomeIcon icon={faCircleCheck} size="xl" style={{color: "#74C0FC",}} className=''/><span className='ml-15 tracking-2'><strong>Flexibility:</strong> With flexible scheduling options including 1 Year Diploma, 6 Months Certificate Course, Short Term and Professional Course, we meet your unique needs and commitments.</span></li>
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