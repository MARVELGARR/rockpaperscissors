
import { useState } from 'react'
import './App.css'
import MobileLayoutV1 from './components/layouts/mobileLayout/version1/mobileLayoutV1'
import LayoutV2 from './components/layouts/mobileLayout/version2/layout'
import useActive from './hooks/isActive'

function App() {

  const { isActive, handleChange} = useActive(false)
  const  [isVersion, setIsVersion] = useState<boolean>(true)
 

  return (
    <div className="h-screen px-5 relative  flex justify-center items-center">
      <button onClick={()=>setIsVersion((prev)=>!prev)} type="button" className="bg-white absolute text-lg lg:text-4xl top-[40rem] lg:top-[4rem] left-[3rem]  rounded-lg w-fit flex flex-col items-center justify-center p-1 md:p-3 ">{isVersion == true? "v1" : " v2"}</button>
      { isVersion && (<div className={`w-fit   h-full`}>
        <MobileLayoutV1 isActive={isActive} handleChange={handleChange}/>
        { isActive &&(<div className="absolute flex items-center justify-center lg:left-[25rem] lg:right-[25rem] top-40  rounded-lg filter backdrop-blur-md bottom-40 bg-white">
            <img 
              src='/images/image-rules.svg'
              alt='Image Rules'
              className=" h-[20rem] mt-8 w-[20rem] lg:object-scale-down object-contain"
            />
            <div className=" absolute top-2 w-full flex items-center justify-between">
              <div className="font-bold text-2xl">RULES</div>
              <img
                src='/images/icon-close.svg'
                alt='close'
                className=''
                onClick={handleChange}
              />
            </div>
          </div>)}
      </div>)}
      { !isVersion && (<div className={`w-fit  h-full`}>
        <LayoutV2 isActive={isActive} handleChange={handleChange} />
        { isActive &&(<div className="absolute flex items-center justify-center lg:left-[25rem] lg:right-[25rem] top-40  rounded-lg filter backdrop-blur-md bottom-40 bg-white">
            <img 
              src='/images/image-rules-bonus.svg'
              alt='Image Rules'
              className=" h-[20rem] mt-8 w-[20rem] lg:object-scale-down object-contain"
            />
            <div   className=" absolute top-2 w-full flex items-center justify-between">
              <div className="font-bold text-2xl">RULES</div>
              <img
                src='/images/icon-close.svg'
                alt='close'
                className=''
                onClick={handleChange}
              />
            </div>
          </div>)}
      </div>)}
    </div>
  )
}

export default App
