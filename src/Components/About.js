import AboutMe from '../assets/about.jpg';
export default function About(){
    const config = {
        line1:'I am Jenifer Sweetlin, a front-end focused web developer. I built wonderful websites with HTML, CSS, Javascript, wordpress, Reactjs and Tailwind CSS ',
        line2:'I am proficient in Frontend skills like HTML, CSS, Javascript, Wordpress, React',
        line3:'I enjoy solving UI challenges, converting designs into functional interfaces, and optimizing websites for speed and accessibility.',
        line4:'Currently exploring more advanced React patterns, modern CSS techniques and angular fundamentals'
    }
    return <section className='flex flex-col md:flex-row bg-primary' id='about'>
        <div className='md:w-1/2 p-5 flex justify-center'>
            <img className='md:w-1/2' src={AboutMe}/>
        </div>
        <div className='md:w-1/2 flex justify-center p-5'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-2xl mb-5 border-b-4 border-secondary w-[120px] font-bold'>About Me</h1>
            <p className='text-xl pb-5'>{config.line1}</p>
            <p className='text-xl'>{config.line2}</p>
             <p className='text-xl'>{config.line3}</p>
             <p className='text-xl'>{config.line4}</p>
            </div>
        </div>
    </section>
}   