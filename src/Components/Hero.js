import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
export default function Hero(){
    const config = {
        subtitle: 'Im a Frontend Developer',
        social:{
            linkedin:'https://www.linkedin.com/in/jenifer-sweetlin-623131209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }}

        return <section className="flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center">
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-4xl font-hero-font'>Hi,<br/> I am Jenifer
        <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
             <a href={config.social.linkedin} className='pr-5  hover:text-white'><AiOutlineLinkedin size={40}/></a> 
        </div>
         </div>
        <img className='md:w-1/3' src={HeroImg}></img>
    </section>
}