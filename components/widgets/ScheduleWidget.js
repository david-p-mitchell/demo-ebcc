import React from 'react';

const WeeklyMeetings = () => {
    const meetings = [
        {
            header: "The Lord's Day (Sunday)",
            events: [
                { time: '9:45 AM', description: "Sunday Club (Children's Discipleship, ages 4 to 15)" },
                { time: '11:15 AM', description: 'Morning Worship' },
                { time: '6:00 PM', description: 'Prayer Time' },
                { time: '6:30 PM', description: 'Evening Worship' },
            ],
        },
        {
            header: 'Midweek Discipleship',
            events: [
                { time: 'Wednesday, 7:30 PM', description: 'Bible Study and Prayer Meeting' },
            ],
        },
        {
            header: 'Community and Fellowship',
            events: [
                { time: 'Thursday, 9:30 AM', description: 'First Steps: Toddler Group (Parents/Carers must stay with children)' },
                { time: 'Thursday, 1:45 PM', description: 'Ladies Meeting (1st and 3rd Thursdays)' },
                { time: 'Friday, 10:00–11:30 AM', description: 'Coffee Morning (Fortnightly; contact for details)' },
                { time: 'Friday, 7:30 PM', description: 'Discoverers (Youth Group, ages 11–16; term time only)' },
            ],
        },
    ];

    return (
        <div className="weekly-meetings">
            <h2>Weekly Meetings</h2>
            {meetings.map((section, index) => (
                <div key={index} className="meeting-section">
                    <h3>{section.header}</h3>
                    <ul>
                        {section.events.map((event, i) => (
                            <li key={i}>
                                <strong>{event.time}:</strong> {event.description}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default WeeklyMeetings;
