import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface Card {
    icon: string;
    label: string;
    description?: string;
}

interface carouselProps {
    cards: Card[];
}

export const Carousel = ({cards}: carouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextState = () => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
    }

    const previousState = () => {
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }

    useEffect(() => {
        const interval = setInterval(() => {
          nextState();
        }, 3000);

        return () => clearInterval(interval);
    }, []);    

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">

        <div className="flex transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
            {
                cards.map((card, index) => (
                    <div key={index} className="min-w-full">
                        <div className="p-6 px-8 flex flex-col gap-2 flex-wrap justify-center border transition bg-white shadow-lg rounded-md hover:shadow-xl dark:text-black items-center py-12 h-max">

                            <div className="flex gap-2">
                                <div className="text-xl">{card.icon}</div>
                                <p className="font-semibold text-xl">{card.label}</p>
                            </div>

                            <p className="text-sm w-[70%] text-center">
                                {card.description}
                            </p>

                        </div>
                    </div>
                ))
            }
        </div>

        <div className="flex absolute w-full h-full top-0 justify-between items-center px-2">
        <button onClick={previousState} className="left-2 top-1/2 text-gray-600 hover:text-black text-2xl cursor-pointer">
            <IoChevronBack />
        </button>
        <button onClick={nextState} className="text-2xl right-2 top-1/2 text-gray-600 hover:text-black cursor-pointer">
            <IoChevronForward />
        </button>
        </div>

    </div>
  )
}
