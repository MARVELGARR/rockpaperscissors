import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface CardsProps {
    value : string[];
    myScore : number ;
    computerScore : number;
    winner: string | null;
    myAnswer: string | null;
    computerAnswer: string | null;
}

const initialState: CardsProps ={
    value: ['rock', 'paper', 'scissors'],
    myScore: 0 ,
    computerScore: 0,
    myAnswer: null,
    computerAnswer: null,
    
    winner: 'null',
}

export const CardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers:{
        select: (state, action: PayloadAction<string>)=>{
            state.myAnswer = action.payload
            state.computerAnswer = state.value[Math.floor(Math.random() * state.value.length)]
            
            switch (state.myAnswer) {
                case "rock":
                    state.winner = state.computerAnswer === 'scissors' ? 'player' : state.computerAnswer === "paper"? 'computer' : 'tie'
                    if(state.winner === 'player'){
                        state.myScore += 2
                        
                    }
                    else if (state.winner === 'computer'){
                        
                        state.computerScore += 2
                    }
                    else{
                        return
                    }
                    break;
                case 'paper':
                    state.winner = state.computerAnswer === 'rock' ? 'player' : state.computerAnswer === 'scissors' ? 'computer' : 'tie'
                    if(state.winner == 'player'){
                        state.myScore += 2
                        
                    }
                    else if (state.winner === 'computer'){
                        
                        state.computerScore += 2
                    }
                    else{return}

                    break;      
                case 'scissors':
                    state.winner = state.computerAnswer === 'paper' ? 'player' : state.computerAnswer === 'rock'? 'computer' : 'tie'
                    if(state.winner === 'player'){
                        state.myScore += 2
                        
                    }
                    else if (state.winner === 'computer'){
                        
                        state.computerScore += 2
                    }
                    else{return}
                    break;      
                default:
                    break;
            }
        }
    }
})

export const { select } = CardsSlice.actions

export const selectAnswer = (state: RootState) => ({
    myScore: state.cards.myScore,
    computerScore: state.cards.computerScore
})

export default CardsSlice.reducer