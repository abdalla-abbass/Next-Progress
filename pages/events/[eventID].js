import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventContent from "../../Components/event-detail/event-content";
import EventLogistics from "../../Components/event-detail/event-logistics";
import EventSummary from "../../Components/event-detail/event-summary";

function EventID() {
    const router = useRouter();
    const eventID = router.query.eventID;
    let event = getEventById(eventID);

    if (!event) {
        event = <p>there is no event found!!</p>;
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics {...event} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}

export default EventID;
