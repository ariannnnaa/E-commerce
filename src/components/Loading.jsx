import { AiOutlineLoading3Quarters } from "react-icons/ai"; //индекатор загрузки

const Loading = () => {
    return (
        <div className='fixed top-0 flex justify-center gap-6 pt-72
         text-white bg-black w-full h-full text-center'>
           <p className='text-5xl'> Loading...</p> 
           <AiOutlineLoading3Quarters  className='animate-spin text-3xl'/>
        </div>
    );
}

export default Loading;
