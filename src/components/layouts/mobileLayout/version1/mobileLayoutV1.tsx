import BoardV1 from "../../../ui/originalVersion/boardV1"
import MobileScoreBoardV1 from "../../../ui/originalVersion/mobileScoreBoardV1"



const MobileLayoutV1 = () =>{
    return(
        <div className="h-full w-[20rem] py-10 flex flex-col gap-[5rem]">
            <MobileScoreBoardV1/>
            <BoardV1/>
            <button type="button" className="border-2 rounded-lg border-gray-300 flex items justify-center p-3 text-4xl text-gray-300">Rules</button>
        </div>
    )
}

export default MobileLayoutV1