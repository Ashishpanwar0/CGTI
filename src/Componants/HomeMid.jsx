import React from 'react';
import CGTIHomeMid from '../assets/CGTIHomeMid.png';

const HomeMid  = ({}) => {
    return(
        // Home Slider After
            <section className='mt-2'>
                {/* first Section Start */}
                <div className='flex gap-x-40 px-5'>
                   <div className=''>
                     <img src={CGTIHomeMid} alt="" className='lg:w-[100%]'/>
                   </div>
                    <div className='lg:w-140 lg:mt-2'>
                        <span className='absolute text-[110px] text-[#E3E7ED] lg:mt-[-90px] lg:ml-10 tracking-10 font-extrabold'>About</span>
                        <h1 className='text-5xl font-bold mb-5 text-[#1F2531] transform-3d'>Computer Guru Training <span className='underline colore-blue'>Institute</span> - Rishikesh</h1>
                        <p className='text-1xl mb-5 text-justify tracking-3 leading-[1.6]'>Computers have become an inevitable part of human life. Nowadays, we live in a world where Alexa plays music and Siri sets alarms on the phone. We cannot overlook the importance of computers in education with the launch of so many education portals and apps that have made it necessary to use computers in education. We know that the future is going to be digital with computers and smart devices. It will not change under any circumstances. Actually, with time, a lot of things are becoming digital in our daily routine of living. So, the way technology must be progressing, everyone is updated with the new technology.</p>
                        <p className='font-bold text-justify tracking-3 leading-[1.6]'>Computer Guru Institute is one of the best training institutes in Rishikesh, which provides new technology and excellent computer training to the students with 100% satisfaction. Computer Guru Training Institute has highly qualified teachers with an updated system and many facilities for our students.</p>
                        <button>Explore More</button>
                    </div>
                </div>
            </section>
    );
};

export default HomeMid