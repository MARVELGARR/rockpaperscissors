import { useAppSelector } from "../../../hooks/reduxHooks"





const MobileScoreBoardV1 = () =>{

    const score = useAppSelector((state)=> state.cards.myScore)
    const winner = useAppSelector((state)=> state.cards.winner)


    return (
        <div className="h-fit border-4 p-2 rounded-lg border-gray-300 flex items-center justify-between">
            <img
                src='/images/logo.svg'
                alt='logo'
                className="w-[6rem] object-cover"
            />
            <div className="bg-white  rounded-lg w-fit flex flex-col items-center justify-center  p-3 ">
                <div className="scoreText text-center uppercase"><span className='font-bold'>Score: </span>{winner}</div>
                <div className="text-center text-2xl font-bold">{score}</div>
            </div>
        </div>
    )
}

export default MobileScoreBoardV1