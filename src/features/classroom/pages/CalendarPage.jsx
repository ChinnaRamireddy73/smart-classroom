import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./CalendarPage.css";

const CalendarPage = () => {
  const [events, setEvents] = useState([
    { title: "English Class", date: "2025-07-05", description: "Grammar & vocabulary review" },
    { title: "Math Review", date: "2025-07-07", description: "Algebra recap session" },
    { title: "Science Quiz", date: "2025-07-08", description: "Chapter 4 to 6 assessment" },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", description: "" });

  const navigate = useNavigate();

  const handleEventClick = ({ event }) => {
    setSelectedEvent({
      title: event.title,
      date: event.startStr,
      description: event.extendedProps.description,
    });
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: "", date: "", description: "" });
      setShowAddModal(false);
    } else {
      alert("Please enter at least title and date.");
    }
  };

  const closeEventModal = () => setSelectedEvent(null);
  const closeAddModal = () => setShowAddModal(false);

  return (
    <div className="calendar-page">
      <div className="calendar-header-bar">
        <h2>📅 My Teaching Schedule</h2>
        <div className="calendar-btns">
          <button className="add-event-btn" onClick={() => setShowAddModal(true)}>+ Add Event</button>
          <button className="back-btn" onClick={() => navigate("/teacher-dashboard")}>← Back to Dashboard</button>
        </div>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
        eventClick={handleEventClick}
        dayMaxEvents={2}
      />

      {/* View Event Modal */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={closeEventModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeEventModal}>×</button>
            <h3>{selectedEvent.title}</h3>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Details:</strong> {selectedEvent.description || "No details available."}</p>
          </div>
        </div>
      )}

      {/* Add Event Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={closeAddModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeAddModal}>×</button>
            <h3>Add New Event</h3>
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            />
            <textarea
              placeholder="Description (optional)"
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            />
            <button onClick={handleAddEvent}>Add Event</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
