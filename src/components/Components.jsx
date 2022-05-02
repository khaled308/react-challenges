export function Button({txt,className}) {
    return (
        <button className={`text-white bg-brightRed px-5 py-2 rounded-full hover:bg-veryPaleRed hover:text-black ${className}`}>{txt}</button>
    )
}
