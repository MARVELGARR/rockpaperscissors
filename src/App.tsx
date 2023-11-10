
import './App.css'
import MobileLayoutV1 from './components/layouts/mobileLayout/version1/mobileLayoutV1'
import useActive from './hooks/isActive'

function App() {

  const { isActive, handleChange} = useActive(false)

  return (
    <div className="h-screen  flex justify-center items-center">

      <div className="w-fit h-full">
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
      </div>
    </div>
  )
}

export default App
