"use client";

export default function HomePage() {
    return (
        <div className={`
            
        `}>
            <button className={`
                text-2xl font-semibold
                `}>Click me</button>
            <div className={`
                w-64 h-64 ml-20
                rounded-br-2xl rounded-tl-2xl rounded-tr-xl rounded-bl-xl
                bg-white/50
                backdrop-blur-sm 
                
                hover:blur-none
                transition duration-700
                `}>

            </div>
        </div>
    );
}