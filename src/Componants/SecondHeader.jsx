import react from 'react';

const SecondHeader =({bgImage, title, subtitle}) => {
        return(
        <header className='h-100' style={{backgroundImage:  `url(${bgImage})`}}>
            <h1>{title}</h1>
        </header>
    )
    }
export default SecondHeader