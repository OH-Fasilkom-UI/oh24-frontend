const BulletinCard = ({
    color,
    text,
    onClick,
}: {
    color: string,
    text: string,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
}) => {
    let classNameCard;
    let classNamePin;

    switch (color) {
        case 'blue':
            classNameCard = 'bg-[#96D2FA] w-full h-[80%] -rotate-3 hover:rotate-0';
            classNamePin = 'w-2 h-4 md:w-3 md:h-6 lg:w-4 lg:h-8 absolute -top-2 md:-top-3 lg:-top-4 left-[50%] -translate-x-[50%] bg-[#B91B70]';
            break;
        case 'red':
            classNameCard = 'bg-[#F19CA3] w-[75%] h-full rotate-2 hover:-rotate-1';
            classNamePin = 'w-3 h-3 md:w-5 md:h-5 absolute -top-1 md:-top-2 left-[50%] -translate-x-[50%] bg-[#B91B70] rounded-full';
            break;
        case 'yellow':
            classNameCard = 'bg-[#C7B45D] w-[85%] h-[90%] -rotate-1 hover:rotate-2';
            classNamePin = 'w-2 h-4 md:w-4 md:h-8 absolute -top-2 md:-top-4 left-[50%] -translate-x-[50%] bg-[#B91B70]';
            break;
        case 'white':
            classNameCard = 'bg-[#D9DCE5] w-[90%] h-[85%] -rotate-2 hover:rotate-1';
            classNamePin = 'w-3 h-3 md:w-5 md:h-5 absolute -top-1 md:-top-2 left-[50%] -translate-x-[50%] bg-[#B91B70] rounded-full';
            break;
        default:
            classNameCard = 'bg-[#D9DCE5] w-[90%] h-[85%] -rotate-2 hover:-rotate-1';
            classNamePin = 'w-3 h-3 md:w-5 md:h-5 absolute -top-1 md:-top-2 left-[50%] -translate-x-[50%] bg-[#B91B70] rounded-full';
    }

    return (
        <div onClick={onClick} className={`cursor-pointer shadow hover:shadow-xl transition relative ${classNameCard}`}>
            <div className={classNamePin}></div>
        </div>
    )
}

export default BulletinCard
