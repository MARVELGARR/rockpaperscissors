import Cards from "./card"
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { select } from "../../../redux/slices/cardSlice"
import useCountDown from "../../../hooks/useCountDown";
import { useState } from "react";



const BoardV1 = () =>{

    const card = [
        { alt:'paper',image:'images/icon-paper.svg', },
        { alt:'rock',image:'images/icon-rock.svg', },
        { alt:'scissors',image:'images/icon-scissors.svg', }
    ]

    const dispatch = useAppDispatch()
    const myAnswer = useAppSelector((state)=> state.cards.myAnswer)
    const computer = useAppSelector((state)=> state.cards.computerAnswer)
    

    const {remainingTime,isCounting,startCountDown} = useCountDown({ time: 5 })
    const handleClick = ( item: string) =>{

        dispatch(select(item))
        startCountDown()
        
    }

    return (
        <div className="h-full">

            { !isCounting &&(<div className="    h-[20rem] relative  bg-[url('/images/bg-triangle.svg')] bg-no-repeat object-cover ">

                   
                {card.map((item, index)=>{
                    return (
                        <button onClick={()=>handleClick(item.alt)} type='button' key={index} className={`${index==0? ' -top-8 -left-[1rem] paperG': index==1? " rockG right-[50%] translate-x-[50%] bottom-5" : " sicssorsG  -right-[1rem] -top-8"} absolute shadow-2xl drop-shadow-2xl  rounded-full p-4 w-fit`}>
                            <Cards
                                
                                image={item.image}
                                alt={item.alt}
                                className={`  bg-white shadow-inner shadow-slate-500 p-7 rounded-full  w-fit`}
                            />
                        </button>
                    )
                })}

            </div>)}
            {isCounting && (<div className="flex-flex-col items-center gap-5">
                <div className="flex items-center justify-center gap-5">
                    <div className=" flex flex-col item  gap-[2rem]">

                        <div className={` flex flex-col item  gap-[2rem] ${myAnswer == 'paper'? '  paperG': myAnswer == 'rock'? " rockG " : " sicssorsG  "}  shadow-2xl drop-shadow-2xl  rounded-full p-4 w-fit`}>

                            <Cards
                                image={`${myAnswer == 'paper' ? 'images/icon-paper.svg' : myAnswer == 'rock'? 'images/icon-rock.svg' : 'images/icon-scissors.svg'}`}
                                alt='my answer'
                                className={`bg-white shadow-inner shadow-slate-500 p-7 rounded-full  w-fit`}
                            />
                        </div>
                        <h1 className="text-white font-bold text-xl">YOU PICKED</h1>
                    </div>
                    <div className=" flex flex-col item  gap-[2rem]">

                        <div className={` ${computer == 'paper'? '  paperG': computer == 'rock'? " rockG " : " sicssorsG  "}  shadow-2xl drop-shadow-2xl  rounded-full p-4 w-fit`}>

                            <Cards
                                image={`${computer == 'paper' ? 'images/icon-paper.svg' : computer == 'rock'? 'images/icon-rock.svg' : 'images/icon-scissors.svg'}`}
                                alt='computer answer'
                                className={`bg-white shadow-inner shadow-slate-500 p-7 rounded-full  w-fit`}
                            />
                        </div>
                        <h1 className="text-white font-bold text-lg">THE HOUSE PICKED</h1>
                    </div>
                </div>
                <div className="">
                    <div className="text-white w-full text-center text-3xl font-bold">{remainingTime}</div>
                </div>
            </div>)}
        </div>
    )
}
export default BoardV1