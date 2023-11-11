import BoardV2 from "../../../ui/bonusVersion/boardV2"
import MobileScoreBoardV2 from "../../../ui/bonusVersion/mobileScoreBoardV2"

interface MobileBoardV1Props{
    isActive?: boolean;
    handleChange: () => void;
}

const LayoutV2: React.FC<MobileBoardV1Props>= ({handleChange}) =>{

    
    return(
        <div className=" relative pb-2  h-full w-[20rem] md:max-w-[25rem] lg:max-w-[55rem] xl:max-w-[75rem]  py-10 flex flex-col gap-[5rem]">
            <MobileScoreBoardV2/>
            <BoardV2/>
            <button onClick={handleChange}  type="button" className="border-2 lg:absolute lg:bottom-5 lg:-right-[10rem] rounded-lg border-gray-300 flex items justify-center p-3 text-4xl text-gray-300">Rules</button>     
        </div>
    )
}

export default LayoutV2