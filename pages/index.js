import React from "react";
import { getAllEvents } from "../dummy-data";
import EventList from "../Components/Event/EventList";

function HomePage() {
    return (
        <div>
            <EventList items={getAllEvents()} />
        </div>
    );
}

export default HomePage;
