import { Spinner } from "@/components/ui/Spinner";
import { useNotification } from "@/hooks/useNotification";
import axios from "axios";
import { useEffect, useState } from "react";

interface Event {
    title: string;
    location: string;
    date: Date;
    time: string;
    owner:  string;
    description: string;
    entryFee: number;
}

export const UpcomingEvents = () => {
    const  [ loading, setLoading ] = useState(false);
    const  [ events, setEvents ] = useState<Event[]>([]);
    const { notify } = useNotification();
     
    const fetchRsvpdEvents = async () => {
        try {
			setLoading(true);
        	const result = await axios.get("http://localhost:3000/api/event/fetch/rsvp", {
          		headers: {
            		Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          	}
        });

        setEvents(result.data?.data);

		if (result.data?.data > 0){
			notify({ id: "post-toast", type: "success", content: "Events fetched successfully" });
		}

		} 
		catch (error) {
			console.error("Error fetching posts", error);

			notify({ id: "post-toast", type: "error", content: "Could not fetch events" });
		}

		setLoading(false);
    };

    useEffect(() => {
        fetchRsvpdEvents();
    }, []);

  return (
    <div className="dark:bg-[#151515] bg-white  p-4 rounded-md dark:shadow-none shadow-xl">
        <h3 className="text-lg font-semibold mb-3">Upcoming Events</h3>

        {
            !events.length &&
            <p className="text-sm dark:text-gray-300 text-gray-500">No Events found</p> 
        }

        {
            loading ? <Spinner /> :
            events.map((event, idx) => (
                <div key={idx} className="mb-3">
                <h4 className="text-sm">{event.title}</h4>
                <p className="text-xs text-gray-500">{event.date.toString()} • {event.time}</p>
            </div> 
            ))
        }
    </div>
  )
};

// {}
