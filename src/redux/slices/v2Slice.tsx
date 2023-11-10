

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface v2Props{
    value : string[];
    myScore : number ;
    computerScore : number;
    winner: string | null;
    myAnswer: string | null;
    computerAnswer: string | null;
}

const initialState : v2Props ={
    value : ['rock', 'paper', 'scissors', 'spock', 'lizard'],
    myScore : 0 ,
    computerScore : 0,
    winner: '',
    myAnswer: '',
    computerAnswer: ''
}

export const CardV2 = createSlice({
    name: "CardV2",
    initialState,
    reducers: {
        selectV2: (state, action: PayloadAction<string>)=>{
            state.myAnswer = action.payload
            state.computerAnswer = state.value[Math.floor(Math.random() * state.value.length)]
            
            switch (state.myAnswer) {
                case "rock":
                    state.winner = state.computerAnswer === 'scissors' ? 'player' : state.computerAnswer === "paper"? 'computer' : state.computerAnswer === 'lizard'? 'player' : state.computerAnswer === "spock"? "computer" : 'tie'
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
                    state.winner = state.computerAnswer === 'rock' ? 'player' : state.computerAnswer === 'scissors' ? 'computer' : state.computerAnswer === 'lizard'? 'computer' : state.computerAnswer === "spock"? "player" : 'tie'
                    if(state.winner == 'player'){
                        state.myScore += 2
                        
                    }
                    else if (state.winner === 'computer'){
                        
                        state.computerScore += 2
                    }
                    else{return}

                    break;      
                case 'scissors':
                    state.winner = state.computerAnswer === 'paper' ? 'player' : state.computerAnswer === 'rock'? 'computer' : state.computerAnswer === 'lizard'? 'player' : state.computerAnswer === "spock"? "computer" : 'tie'
                    if(state.winner === 'player'){
                        state.myScore += 2
                        
                    }
                    else if (state.winner === 'computer'){
                        
                        state.computerScore += 2
                    }
                    else{return}
                    break;      
                case 'lizard':
                    state.winner = state.computerAnswer === 'paper' ? 'player' : state.computerAnswer === 'rock'? 'computer' : state.computerAnswer === 'scissors'? 'computer' : state.computerAnswer === "spock"? "player" : 'tie'
                    if(state.winner === 'player'){
                        state.myScore += 2
                        
                    }
                    else if (state.winner === 'computer'){
                        
                        state.computerScore += 2
                    }
                    else{return}
                    break;      
                case 'spock':
                    state.winner = state.computerAnswer === 'paper' ? 'computer' : state.computerAnswer === 'rock'? 'player' : state.computerAnswer === 'scissors'? 'player' : state.computerAnswer === "lizard"? "computer" : 'tie'
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

export const { selectV2 } = CardV2.actions


export default CardV2.reducer