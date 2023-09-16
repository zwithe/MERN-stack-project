/* Schema structure
// Define a Trip object
const trip = {
  id: "12345",
  startDate: "2023-10-15",
  endDate: "2023-10-20",
  hotels: [
    {
      name: "Luxury Hotel",
      location: "City Center",
      checkInDate: "2023-10-15",
      checkOutDate: "2023-10-18",
    },
    {
      name: "Cozy Inn",
      location: "Near the Beach",
      checkInDate: "2023-10-18",
      checkOutDate: "2023-10-20",
    },
  ],
  dailyActivities: [
    {
      date: "2023-10-15",
      activities: [
        {
          name: "City Tour",
          description: "Explore the city's landmarks.",
        },
        {
          name: "Fine Dining",
          description: "Dine at a famous local restaurant.",
        },
      ],
    },
    {
      date: "2023-10-16",
      activities: [
        {
          name: "Beach Day",
          description: "Relax on the beach and swim.",
        },
        {
          name: "Sunset Cruise",
          description: "Enjoy a scenic sunset cruise.",
        },
      ],
    },
    // Add more daily activities as needed
  ],
};

// You can access and manipulate the trip data like this:
console.log("Trip ID:", trip.id);
console.log("Start Date:", trip.startDate);
console.log("End Date:", trip.endDate);

console.log("Hotels:");
trip.hotels.forEach((hotel, index) => {
  console.log(`Hotel ${index + 1}:`);
  console.log("Name:", hotel.name);
  console.log("Location:", hotel.location);
  console.log("Check-In Date:", hotel.checkInDate);
  console.log("Check-Out Date:", hotel.checkOutDate);
});

console.log("Daily Activities:");
trip.dailyActivities.forEach((day) => {
  console.log("Date:", day.date);
  day.activities.forEach((activity, index) => {
    console.log(`Activity ${index + 1}:`);
    console.log("Name:", activity.name);
    console.log("Description:", activity.description);
  });
});










*/
