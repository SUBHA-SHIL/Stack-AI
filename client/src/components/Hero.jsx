import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const Hero = () => {

    const navigate = useNavigate()
  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
      
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">Create Amazing content <br /> with <span className="text-primary">AI tools</span></h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600 text-xl">Create better content, transform images, improve your resume, and accomplish more with intelligent AI tools.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
        <button onClick={()=> navigate('/ai')} className="bg-primary text-white px-10 py-3 rounded-3xl hover:scale-105 active:scale-95 transition cursor-pointer font-medium">Start creating Now</button>
        <button className="bg-white text-primary px-10 py-3 rounded-3xl hover:scale-105 active:scale-95 transition cursor-pointer font-semibold">Watch demo</button>
      </div>
      <div className="flex flex-row justify-center items-center gap-5 text-sm max-sm:text-xs pt-10">
        <img src={assets.user_group} alt="" className="h-8"/>
        <span className="text-gray-600">Trusted by 10k+ people</span>
      </div>
    </div>
  )
}

export default Hero
