import EventCard from "./EventCard"

export const Events = () => {
  return (
    <div className="">
      <EventCard
      title="Tech Alumni Meetup 2025"
      date="April 20, 2025"
      time="5:00 PM - 8:00 PM"
      location="Gujarat University Auditorium"
      description="An evening to reconnect with alumni, share experiences, and explore collaboration opportunities."
      tags={["Networking", "Tech", "In-Person"]}
      />
    </div>
  )
}
