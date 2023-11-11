import { useAppSelector } from "../../../hooks/reduxHooks"




const MobileScoreBoardV2 = () =>{

    const score = useAppSelector((state)=> state.cardV2.myScore)
    const winner = useAppSelector((state)=> state.cardV2.winner)

    return (
        <div className="h-fit w-[21rem] md:-left-[1.5rem] lg:-left-[5rem] absolute md:w-[25rem] lg:w-[35rem] border-4 p-2 rounded-lg border-gray-300 flex items-center justify-between">
            <img
                src='/images/logo.svg'
                alt='logo'
                className="w-[6rem] object-cover"
            />
           
            <div className="bg-white  rounded-lg w-fit flex flex-col items-center justify-center  p-3 ">
                <div className="scoreText text-center uppercase"><span className='font-bold'>winner: </span>{ winner == 'player'? 'i won': 'i lost'}</div>
                <div className="text-center text-2xl font-bold">{score}</div>
            </div>
        </div>
    )
}

export default MobileScoreBoardV2