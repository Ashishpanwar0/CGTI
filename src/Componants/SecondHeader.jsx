import react from 'react';

const SecondHeader =({bgImage, title,}) => {
        return(
        <header className='h-130 bg-cover bg-center opacity-70 ' style={{backgroundImage:  `url(${bgImage})`}}>
            <h1 className='text-5xl pt-50 ml-20 font-extrabold text-[#FFFFFF]'>{title}</h1>
            <a href="/" className='text-xl pt-50 ml-20 font-extrabold text-[black]'>{subtitle}</a>
        </header>


    )
    }
export default SecondHeader