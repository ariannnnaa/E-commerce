import {about} from '../data/data';

const AboutUs = () => {
    return (
        <section className='my-28'>
          <h2 className='mb-8'>О нас</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 sm:px-11'>
            {about.map((item, index) => {
                return <div key={index} className='bg-gray-200 py-5 sm:py-9 rounded-lg gap-4 flex flex-col justify-between items-center'>
                      <img src={item.img} className='size-16' alt="icon" />
                <h3 className='font-bold lg:text-xl text-gray-900'>{item.title}</h3>
                <p className='text-gray-400 px-2'>{item.desc}</p>
                </div>
            })}
        </div>
        </section>
    );
}

export default AboutUs;
