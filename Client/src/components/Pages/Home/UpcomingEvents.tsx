interface Event {
    name: string;
    date: string;
    day: string;
    time: string;
}

export const UpcomingEvents = () => {
    const events: Event[] = [
        { name: "Mobile Trends Conference 2025", day: "Thursday", date: "Mar 27, 2025", time: "1:30 PM" },
        { name: "3-Day Leadership & Management Program", day: "Thursday", date: "Mar 27, 2025", time: "10:30 AM" },
    ];

  return (
    <div className="dark:bg-[#151515] bg-white  p-4 rounded-xl dark:shadow-none shadow-xl">
        <h3 className="text-lg font-semibold mb-3">Upcoming Events</h3>

        {events.map((event, idx) => (
            <div key={idx} className="mb-3">
            <h4 className="text-sm">{event.name}</h4>
            <p className="text-xs text-gray-500">{event.day} • {event.date} • {event.time}</p>
        </div> 
        ))}
    </div>
  )
};
