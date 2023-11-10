

interface CardsProps{
    image: string
    alt: string
    className: string
}

const Cards: React.FC<CardsProps> = ({ image, alt, className}) =>{
    return(
        <div className={className}>
            <img
                src={image}
                alt={alt}
                className="w-fit"
            />
        </div>    
    )
}

export default Cards