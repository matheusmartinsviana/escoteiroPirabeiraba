import styles from "./styles/EventCard.module.css"
import PropTypes from "prop-types"

const EventCard = ({ event }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        })
    }

    const formatTime = (timeString) => {
        return timeString ? timeString.substring(0, 5) : ""
    }

    return (
        <div className={styles.eventCard}>
            <div className={styles.eventImage}>
                {event.image_url ? (
                    <img src={event.image_url} alt={event.title} />
                ) : (
                    <div className={styles.placeholderImage}>
                        <span>📸</span>
                    </div>
                )}
                <div className={styles.eventBadge}>
                    <span className={styles.badgeIcon}>📍</span>
                </div>
            </div>

            <div className={styles.eventContent}>
                <h3 className={styles.eventTitle}>{event.title}</h3>

                <div className={styles.eventDetails}>
                    <div className={styles.eventDetail}>
                        <span className={styles.detailIcon}>📍</span>
                        <span className={styles.detailText}>{event.location}</span>
                    </div>

                    <div className={styles.eventDetail}>
                        <span className={styles.detailIcon}>📅</span>
                        <span className={styles.detailText}>{formatDate(event.event_date)}</span>
                    </div>

                    <div className={styles.eventDetail}>
                        <span className={styles.detailIcon}>🕐</span>
                        <span className={styles.detailText}>
                            {formatTime(event.event_time)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

EventCard.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image_url: PropTypes.string,  // corrigido
        location: PropTypes.string.isRequired,
        event_date: PropTypes.string.isRequired, // corrigido
        event_time: PropTypes.string, // corrigido
    }).isRequired
}

export default EventCard
