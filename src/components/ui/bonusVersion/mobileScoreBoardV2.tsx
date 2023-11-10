





const MobileScoreBoardV2 = () =>{



    return (
        <div className="h-fit w-[21rem] md:-left-[1.5rem] lg:-left-[5rem] absolute md:w-[25rem] lg:w-[35rem] border-4 p-2 rounded-lg border-gray-300 flex items-center justify-between">
            <img
                src='/images/logo.svg'
                alt='logo'
                className="w-[6rem] object-cover"
            />
            <button type="button" className="bg-white  rounded-lg w-fit flex flex-col items-center justify-center  p-3 ">V</button>
            <div className="bg-white  rounded-lg w-fit flex flex-col items-center justify-center  p-3 ">
                <div className="scoreText text-center uppercase"><span className='font-bold'>Score: </span>{}</div>
                <div className="text-center text-2xl font-bold">{}</div>
            </div>
        </div>
    )
}

export default MobileScoreBoardV2