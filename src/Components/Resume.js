import ResumeImg from '../assets/resumeimg.jpg';
import Resumepdf from '../assets/myresume.pdf';

export default function Resume(){
    const config ={
        link : Resumepdf

    }
    return <section className='flex flex-col md:flex-row bg-primary'>
        <div className='md:w-1/2 p-5 flex justify-center'>
            <img className='md:w-1/2' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center p-5'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-2xl mb-5 border-b-4 border-secondary w-[90px] font-bold'>Resume</h1>
            <p className='text-xl pb-5'>You can view my resume<a href={config.link} className='btn ml-2'>Download</a> </p>
            
            </div>
        </div>
    </section>
}