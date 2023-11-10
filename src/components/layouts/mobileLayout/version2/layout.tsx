import BoardV2 from "../../../ui/bonusVersion/boardV2"
import MobileScoreBoardV1 from "../../../ui/originalVersion/mobileScoreBoardV1"

const LayoutV2: React.FC= () =>{

    
    return(
        <div className=" relative  h-full w-[20rem] md:max-w-[25rem] lg:max-w-[55rem] xl:max-w-[75rem]  py-10 flex flex-col gap-[5rem]">
            <MobileScoreBoardV1/>
            <BoardV2/>
            <button  type="button" className="border-2 rounded-lg border-gray-300 flex items justify-center p-3 text-4xl text-gray-300">Rules</button>     
        </div>
    )
}

export default LayoutV2