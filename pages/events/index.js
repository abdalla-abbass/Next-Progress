import { Fragment } from "react/cjs/react.production.min";
import EventList from "../../Components/Event/EventList";
import EventSearch from "../../Components/Event/EventSearch";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

function AllEventPage() {
    const router = useRouter();
    function onSearch(year, month) {
        router.push(`/events/${year}/${month}`);
    }
    return (
        <Fragment>
            <EventSearch onSearch={onSearch} />
            <EventList items={getAllEvents()} />
        </Fragment>
    );
}

export default AllEventPage;
