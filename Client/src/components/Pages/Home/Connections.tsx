import { UserConnectionCard } from "./UserConnectionCard";

export const Connections = () => {

    const connections = [
        {
          firstName: "Aarav",
          lastName: "Patel",
          _id: "u001",
          profileImageURL: "https://randomuser.me/api/portraits/men/32.jpg",
          role: "Alumni, Software Engineer",
        },
        {
          firstName: "Isha",
          lastName: "Mehta",
          _id: "u002",
          profileImageURL: "https://randomuser.me/api/portraits/women/45.jpg",
          role: "Student",
        },
        {
          firstName: "Rohan",
          lastName: "Sharma",
          _id: "u003",
          profileImageURL: "https://randomuser.me/api/portraits/men/76.jpg",
          role: "Alumni, Frontend Developer",
        },
        {
          firstName: "Sneha",
          lastName: "Kapoor",
          _id: "u004",
          profileImageURL: "https://randomuser.me/api/portraits/women/33.jpg",
          role: "Student",
        },
        {
          firstName: "Dev",
          lastName: "Singh",
          _id: "u005",
          profileImageURL: "https://randomuser.me/api/portraits/men/88.jpg",
          role: "Alumni, Full Stack Developer",
        },
    ];
      

  return (
    <div className="dark:bg-[#151515] bg-white  p-4 rounded-md dark:shadow-none shadow-xl">

        <h3 className="text-lg font-semibold mb-3">Connections</h3>

        <div className="space-y-4">
            {
                connections.map((connection, index) => (
                    <UserConnectionCard key={index}
                        _id={connection._id}
                        firstName={connection.firstName}
                        lastName={connection.lastName}
                        profileImageURL={connection.profileImageURL}
                        role={connection.role}
                    />
                ))
            }
        </div>        

    </div>
  )
}
