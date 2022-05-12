import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../Components/Event/EventList";

function FilteredEventPage() {
    const router = useRouter();
    const filterData = router.query.slug;

    if (!filterData) {
        return <p className="center">Loading...</p>;
    }

    const filterYear = filterData[0];
    const filterMonth = filterData[1];
    const numYear = +filterYear;
    const numMonth = +filterMonth;

    if (isNaN(numMonth) || isNaN(numYear) || numMonth > 12 || numMonth < 1) {
        return <p>Invalid filter, Please adjust your values!</p>;
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });
    if (!filteredEvents || filteredEvents.length === 0) {
        <p> No Events Found for the chosen filter! </p>;
    }
    return <EventList items={filteredEvents} />;
}

export default FilteredEventPage;
