import React, { useState } from 'react';

function BookingForm() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [people, setPeople] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking confirmed for ${name} on ${date} at ${time} for ${people} people.`);
        setName('');
        setContact('');
        setDate('');
        setTime('');
        setPeople(1);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div class="submission-section">
                <h2>Book a Table</h2>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Contact:</label>
                <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />

                <label>Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

                <label>Time:</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

                <label>Number of People:</label>
                <input type="number" value={people} onChange={(e) => setPeople(e.target.value)} min="1" required />

                <div class="buttons">
                    <button type="submit" class="btn btn-preview">Book now</button>
                </div>
            </div>
        </form>

    );
}

export default BookingForm;
