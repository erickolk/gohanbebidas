import banner from '../../assets/banner.webp'

export default function Banner(){
    return (
        <section className=" w-[100vw] h-[60vh] rounded-md mb-8 p-8 text-center flex flex-col justify-center items-center">
           
            <img src={banner} alt="" className=' rounded-sm'/>
        </section>
    )
}