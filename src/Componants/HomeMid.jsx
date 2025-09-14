import React from 'react';
import CGTIHomeMid from '../assets/CGTIHomeMid.png';
import TextBackGroundColoreImage from '../assets/TextBackGroundColoreImage.jpg';

const HomeMid  = ({}) => {
    return(
        // Home Slider After
            <section className='pt-8 shadow-sm'>
                {/* first Section Start */}
                <div className='lg:flex gap-x-40 lg:px-5 px-8 lg:ml-10 mb-8'>
                   <div className=''>
                     <img src={CGTIHomeMid} alt="" className='lg:w-[100%]'/>
                   </div>
                    <div className='lg:w-130'>
                         <span className="absolute text-[110px] text-[#E3E7ED] lg:mt-[-110px] lg:ml-10 tracking-[10px] font-extrabold select-none 
                 stroke-text">About</span>
                        <h1 className='lg:text-[40px] text-4xl font-bold mb-2 text-[#1F2531] transform-1d lg:mt-0 mt-8'>Computer Guru Training <span className='underline decoration-blue-500'>Institute</span> - Rishikesh</h1>
                        <p className='text-1xl mb-5 text-justify tracking-3 leading-[1.6] text-[#C3C8C7]'>Computers have become an inevitable part of human life. Nowadays, we live in a world where Alexa plays music and Siri sets alarms on the phone. We cannot overlook the importance of computers in education with the launch of so many education portals and apps that have made it necessary to use computers in education. We know that the future is going to be digital with computers and smart devices. It will not change under any circumstances. Actually, with time, a lot of things are becoming digital in our daily routine of living. So, the way technology must be progressing, everyone is updated with the new technology.</p>
                        <p className='text-[#1F2531] text-justify tracking-3 leading-[1.6] mb-5'>Computer Guru Institute is one of the best training institutes in Rishikesh, which provides new technology and excellent computer training to the students with 100% satisfaction. Computer Guru Training Institute has highly qualified teachers with an updated system and many facilities for our students.</p>
                        <button className='border-1 rounded-xl px-6 py-3'>Explore More</button>
                    </div>
                </div>

                <div>
                   <h1 className="lg:text-[150px] text-5xl font-extrabold bg-clip-text text-transparent bg-center bg-cove lg:text-center lg:px-0 px-8" style={{ backgroundImage: `url(${TextBackGroundColoreImage})` }}>Lead the Future</h1>
                </div>
            </section>
    );
};

export default HomeMid