import { defineStore } from "pinia";

export const useEventsStore = defineStore('eventsStore', {
    state: () => ({
        event: {}, // Evento individual
        events: [], // Lista de eventos
    }),
    actions: {
        async fetchEvents() {
            try {
                const response = await fetch('http://localhost:3000/api/events');
                if (!response.ok) throw new Error("Error al obtener los eventos");
                const data = await response.json();
                this.events = data; // Asigna los datos al estado
                console.log(this.events); // Muestra los eventos en la consola
            } catch (error) {
                console.error("Error en fetchEvents:", error);
            }
        },
        async fetchEventById(id) {
            try {
                const response = await fetch(`http://localhost:3000/api/events/${id}`);
                if (!response.ok) throw new Error("Error al obtener el evento");
                const data = await response.json();
                this.event = data; // Asigna los datos al estado
                console.log(this.event); // Muestra el evento en la consola
            } catch (error) {
                console.error("Error en fetchEventById:", error);
            }
        },
    },
});

export default useEventsStore
