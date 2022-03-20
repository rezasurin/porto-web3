import { BsShieldFillCheck } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'

const ServicesCard = ({ color, title, icons, subtitle}) => (
  <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icons}
    </div>
    <div className='ml-5 flex flex-col flex-1'>
      <h1 className='mt-2 text-white text-lg '>{title}</h1>
      <p className='mt-2 text-white text-sm md:w-9/12 '>{subtitle}</p>
    </div>
  </div>
)

const Services = () => {
  return (
    <div className='flex w-full flex-col md:flex-row justify-center items-center gradient-bg-services'>
      <div className='flex mf:flex flex-col items-center justify-between md:p-20 py-12 px-4'>
        <div className='flex-1 flex flex-col justify-start items-start'>
          <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient'>
            Services that we
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className='flex-1 flex flex-col justify-start items-center'>
        <ServicesCard 
        color="bg-[#2952e3]"
        title="Security Guarantee"
        icons={<BsShieldFillCheck fontSize={21} className="text-white" />}
        subtitle="Security is guaranted. We always maintain privacy and maintain the quality of our products."
        />
        <ServicesCard 
        color="bg-[#8945f8]"
        title="Best Exchange"
        icons={<BiSearchAlt fontSize={21} className="text-white" />}
        subtitle="Security is guaranted. We always maintain privacy and maintain the quality of our products."
        />
        <ServicesCard 
        color="bg-[#f84550]"
        title="Fastest Transaction"
        icons={<BiSearchAlt fontSize={21} className="text-white" />}
        subtitle="Security is guaranted. We always maintain privacy and maintain the quality of our products."
        />
      </div>
    </div>
  )
}

export default Services