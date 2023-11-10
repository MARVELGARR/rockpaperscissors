import { useState } from "react"



const useActive = (initialState: boolean) =>{

    const [isActive, setIsActive] = useState<boolean>(initialState)

    const handleChange=()=>{
        setIsActive((prev)=>!prev)
    }
    return{handleChange, isActive}
}

export default useActive