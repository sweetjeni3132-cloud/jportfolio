
export default function Contact(){
    const config = {
        email : 'sweetjeni3132@gmail.com',
        phone : '7010253994'
    }
    return <section className='flex flex-col md:flex-row bg-secondary text-white' id="contact">
        <div className='w-full flex flex-col items-center p-5'>
            
            <h1 className='text-2xl mb-5 border-b-4 border-primary w-[90px] font-bold'>Contact</h1>
            <p className='text-xl pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className="py-2"><span className="font-bold">Email :</span>{config.email}</p>
            <p className="py-2"><span className="font-bold">Phone :</span>{config.phone}</p>
         
        </div>
    </section>
}