
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { selectV2 } from '../../../redux/slices/v2Slice';
import useCountDown from "../../../hooks/useCountDown";
import Cards from '../originalVersion/card';




const BoardV2 = () =>{

    const card = [
        { alt:'paper',image:'images/icon-paper.svg', },
        { alt:'rock',image:'images/icon-rock.svg', },
        { alt:'scissors',image:'images/icon-scissors.svg', },
        { alt:'lizard',image:'images/icon-lizard.svg', },
        { alt:'spock',image:'images/icon-spock.svg', },
    ]

    const dispatch = useAppDispatch()
    const myAnswer = useAppSelector((state)=> state.cardV2.myAnswer)
    const computer = useAppSelector((state)=> state.cardV2.computerAnswer)
    const winner = useAppSelector((state)=> state.cardV2.winner)
    

    const {remainingTime,isCounting,startCountDown, stopCountDown} = useCountDown({ time: 30 })
    const handleClick = ( item: string) =>{

        dispatch(selectV2(item))
        startCountDown()
        
    }

    return (
        <div className="h-full mt-[13rem] px-4">

            { !isCounting &&(<div className="    h-[20rem] relative  bg-[url('/images/bg-pentagon.svg')] bg-no-repeat object-cover ">

                   
                {card.map((item, index)=>{
                    return (
                        <button onClick={()=>handleClick(item.alt)} type='button' key={index} className={`${index==0? ' top-[3rem] -right-[4rem] paperG': index==1? " rockG -right-[1rem] -bottom-[1rem]" : index==2 ? " sicssorsG  right-[5rem] -top-16" : index == 3? 'lizardG -bottom-[2rem] left-0': 'cyanG top-[2.5rem] -left-[3rem]'} absolute shadow-2xl drop-shadow-2xl  rounded-full p-4 w-fit`}>
                            <Cards
                                
                                image={item.image}
                                alt={item.alt}
                                className={`  bg-white shadow-inner shadow-slate-500 p-5 rounded-full  w-fit`}
                            />
                        </button>
                    )
                })}

            </div>)}
            {isCounting && (<div className=" lg:absolute lg:right-[12rem] lg:w-full flex-flex-col items-center gap-5">
                <div className="flex lg:w-[50rem] w-full items-center justify-evenly gap-[3rem] lg:gap-5">
                    <div className="  lg:gap-[3rem] flex flex-col   gap-[2rem]">

                        <div className={` flex flex-col item  gap-[2rem] ${myAnswer == 'paper'? '  paperG': myAnswer == 'rock'? " rockG " : myAnswer == 'scissors'? " sicssorsG  " : myAnswer == 'lizard' ? 'lizardG' : 'cyanG'}  shadow-2xl drop-shadow-2xl  rounded-full p-4 w-fit`}>

                            <Cards
                                image={`${myAnswer == 'paper' ? 'images/icon-paper.svg' : myAnswer == 'rock'? 'images/icon-rock.svg' : myAnswer =='scissors'? 'images/icon-scissors.svg': myAnswer == "lizard" ? '/images/icon-lizard.svg' : '/images/icon-spock.svg' }`}
                                alt='my answer'
                                className={`bg-white shadow-inner shadow-slate-500 p-7 rounded-full  w-fit`}
                            />
                        </div>
                        <h1 className="text-white font-bold text-xl">YOU PICKED</h1>
                    </div>
                    <div className="hidden lg:flex w-fit flex-col items-center gap-3">
                        <div className="text-white flex items-center font-bold text-2xl justify-center ">{ winner == 'computer'? 'YOU LOSE': "YOU WON"}</div>
                        <button onClick={stopCountDown} type="button" className="w-fit bg-white rounded-lg p-2 text-xl flex items-center justify-center">Play Again</button>
                    </div>
                    <div className=" flex lg:gap-[3rem] flex-col item  gap-[2rem]">

                        <div className={` ${computer == 'paper'? '  paperG': computer == 'rock'? " rockG " : computer == 'scissors'? " sicssorsG  " : computer == 'lizard' ? 'lizardG' : 'cyanG'}  shadow-2xl drop-shadow-2xl  rounded-full p-4 w-fit`}>

                            <Cards
                                image={`${computer == 'paper' ? 'images/icon-paper.svg' : computer == 'rock'? 'images/icon-rock.svg' : computer =='scissors'? 'images/icon-scissors.svg': computer == "lizard" ? '/images/icon-lizard.svg' : '/images/icon-spock.svg' }`}
                                alt='computer answer'
                                className={`bg-white shadow-inner shadow-slate-500 p-7 rounded-full  w-fit`}
                            />
                        </div>
                        <h1 className="text-white font-bold text-md lg:text-lg">THE HOUSE PICKED</h1>
                    </div>
                </div>
                <div className="">
                    <div className="text-white w-full lg:absolute  lg:left-[15rem] text-center text-3xl font-bold">{remainingTime}</div>
                </div>
            </div>)}
        </div>
    )
}
export default BoardV2