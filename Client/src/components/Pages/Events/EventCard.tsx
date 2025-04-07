interface EventCardInterface {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    tags: string[];
}

const EventCard = ({ title, date, time, location, description }: EventCardInterface) => {
  return (
    <div className="bg-white dark:bg-[#151515] border rounded-xl p-6 shadow-sm hover:shadow-md transition relative">
      <h2 className="text-lg font-semibold mb-1">{title}</h2>

      <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-2">
        <div className="flex items-center gap-1">
          <span>{date}</span>
        </div>
        <div className="text-gray-400">•</div>
        <div>{time}</div>
        <div className="text-gray-400">•</div>
        <div className="flex items-center gap-1">
          <span>{location}</span>
        </div>
      </div>

      <div className="w-full h-60 mx-auto my-6 border border-white dark:text-white text-black dark:bg-gray-600 bg-gray-300"></div>

      <p className="text-gray-700 dark:text-gray-400 text-sm mt-2">{description}</p>
      
      <button className="px-4 py-1 bg-black dark:bg-white dark:text-black font-semibold cursor-pointer text-white rounded-md transition text-sm absolute top-6 right-8">
        Rsvp
      </button>
    </div>
  );
};

export default EventCard;
