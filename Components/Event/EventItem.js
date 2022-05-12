import classes from "./EventItem.module.css";
import Button from "../Button/Button";
import DateIcon from "../Icons/date-icon";
import ArrowRight from "../Icons/arrow-right-icon";
import Address from "../Icons/address-icon";

function EventItem(props) {
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const formattedAddress = location.replace(", ", "\n");
    const exploreLink = `/events/${id}`;
    return (
        <li className={classes.item}>
            <img src={"/" + image} alt={title} className={classes.item} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div>
                        <time className={classes.date}>
                            <DateIcon />
                            {humanReadableDate}
                        </time>
                    </div>
                    <div>
                        <address className={classes.address}>
                            <Address />
                            {formattedAddress}
                        </address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <ArrowRight />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default EventItem;
