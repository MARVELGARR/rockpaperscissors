import { useEffect, useState } from "react";

interface useCountDownProps{
    time: number;
}
interface UseCountDownResult {
    remainingTime: number;
    isCounting: boolean;
    startCountDown: () => void;
    stopCountDown: () => void;
    resetCountDown: () => void;
}

const useCountDown = ({ time} : useCountDownProps) : UseCountDownResult =>{

    const [remainingTime, setRemainingTime] = useState(time);
    const [isCounting, setIsCounting] = useState(false);

    const startCountDown = () => {
        setIsCounting(true);
    };

    const stopCountDown = () => {
        setIsCounting(false);
    };
    const resetCountDown = () => {
        stopCountDown();
        setRemainingTime(time);
    };

    useEffect(() => {
        let timerId: NodeJS.Timeout;

        const updateCountdown = () => {
            setRemainingTime((prevTime) => Math.max(0, prevTime - 1));
        };

        if (isCounting && remainingTime > 0) {
            timerId = setInterval(updateCountdown, 1000);
        }
        
        if(remainingTime === 0){
            resetCountDown()
        }
        return () => {
            clearInterval(timerId);
        };
    }, [isCounting, remainingTime]);

    return {
        remainingTime,
        isCounting,
        startCountDown,
        stopCountDown,
        resetCountDown
    };


}

export default useCountDown