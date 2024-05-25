import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
      <div className='text-center'>
        <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-3 py-1 uppercase'>feature</span>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
          Easily build <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>your code</span>
        </h2>
      </div>
      <div className='flex flex-wrap mt-10 lg:mt-20'>
        {features.map((feature, index) => (
          <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-4 '>
            <div className=' p-2 rounded-lg text-center'>
              <div className='text-orange-500 mx-2'>
                {feature.icon}
              </div>
              <h3 className='text-xl font-medium -mt-7 mb-6'>{feature.text}</h3>
              <p className='text-neutral-400'>{feature.description}</p>
            </div>
          </div>
        

            
        
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
