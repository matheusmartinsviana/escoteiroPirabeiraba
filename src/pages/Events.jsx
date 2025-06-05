import { useState, useEffect } from "react"
import EventCard from "../components/Events/EventCard"
import EventListItem from "../components/Events/EventListItem"
import styles from "./styles/Events.module.css"

const Events = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([])
    const [pastEvents, setPastEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async () => {
        try {
            setLoading(true)
            const response = await fetch('/api/events', {
                method: 'GET',
                headers: {
                    'x-api-key': import.meta.env.VITE_API_KEY,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error("Erro ao carregar eventos")
            }

            const data = await response.json()
            console.log('Resposta da API:', data)

            // Extrair events antes de verificar se é array
            const { events } = data

            // Verificar se events é um array
            if (!Array.isArray(events)) {
                console.error('A resposta da API não contém um array de eventos:', data)
                throw new Error("Formato de resposta inválido da API")
            }

            const now = new Date()

            // Separar eventos futuros e passados
            const upcoming = events.filter((event) => new Date(event.event_date) >= now)
            const past = events.filter((event) => new Date(event.event_date) < now)

            // Ordenar eventos
            upcoming.sort((a, b) => new Date(a.event_date) - new Date(b.event_date))
            past.sort((a, b) => new Date(b.event_date) - new Date(a.event_date))

            setUpcomingEvents(upcoming.slice(0, 6)) // Mostrar apenas os próximos 6
            setPastEvents(past.slice(0, 10)) // Mostrar apenas os últimos 10
        } catch (err) {
            setError(err.message)
            console.error("Erro ao buscar eventos:", err)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className={styles.eventsPage}>
                <div className="container">
                    <div className={styles.loading}>
                        <div className={styles.spinner}></div>
                        <p>Carregando eventos...</p>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.eventsPage}>
                <div className="container">
                    <div className={styles.error}>
                        <p>Erro ao carregar eventos: {error}</p>
                        <button onClick={fetchEvents} className={styles.retryButton}>
                            Tentar novamente
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.eventsPage}>
            <div className="container">
                {/* Seção de Eventos Próximos */}
                <section className={styles.upcomingEvents}>
                    <div className={styles.sectionHeader}>
                        <h2>Nossos Eventos</h2>
                        <p>Próximos eventos</p>
                    </div>

                    {upcomingEvents.length > 0 ? (
                        <div className={styles.eventsContainer}>
                            {upcomingEvents.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.noEvents}>
                            <p>Nenhum evento próximo programado.</p>
                        </div>
                    )}

                    <div className={styles.sectionFooter}>
                        <button className={styles.viewAllButton}>Próximos eventos</button>
                    </div>
                </section>

                {/* Seção de Eventos Anteriores */}
                {pastEvents.length > 0 && (
                    <section className={styles.pastEvents}>
                        <div className={styles.sectionHeader}>
                            <h2>Eventos Anteriores</h2>
                            <p>1 lista de eventos</p>
                        </div>

                        <div className={styles.eventsList}>
                            {pastEvents.map((event) => (
                                <EventListItem key={event.id} event={event} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}

export default Events