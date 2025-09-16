    import react from 'react';
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
    import CGTIMid1 from '../assets/CGTIMid2.png';
    import CGTIMid2 from '../assets/CGTIMid2.1.png';


    const HomeMid2 = ({}) => {
        return(
            <section className='pt-25'>
                {/* First Section Start  */}
                <div className='lg:flex w-full'>
                    <div>
                        <img src={CGTIMid1} alt="CGTI Image" className=''/>
                    </div>
                    <div className='space-y-6 lg:w-[40%] text-justify'>
                        <h1 className='text-4xl font-extrabold'>What we promise for the bright future of the student</h1>
                        <p>we are always supportive of empowering our students with the necessary knowledge, skills and opportunities for a bright and successful future.</p>
                        <ul className='space-y-5'>
                            <li> <FontAwesomeIcon icon={faCircleCheck} size='xl' style={{color: "#74C0FC",}}/>Quality Education: We provide high-quality education with a focus on the latest curriculum and expert instructors dedicated to your success.</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} size='xl' style={{color: "#74C0FC",}}/>Industry Relevance: Our courses are designed to meet the demands of the ever-evolving technology industry, ensuring that you are well prepared for real-world challenges.</li>
                            <li><FontAwesomeIcon icon={faCircleCheck} size='xl' style={{color: "#74C0FC",}}/>Flexibility: With flexible scheduling options including 1 Year Diploma, 6 Months Certificate Course, Short Term and Professional Course, we meet your unique needs and commitments.</li>
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