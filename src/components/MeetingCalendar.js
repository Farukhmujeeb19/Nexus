// src/components/MeetingCalendar.js
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

export default function MeetingCalendar() {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [title, setTitle] = useState('');

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setOpen(true);
  };

  const handleAddEvent = () => {
    if (title) {
      setEvents([...events, { title, date: selectedDate }]);
      setOpen(false);
      setTitle('');
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <h2>📅 Meeting Scheduler</h2>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={events}
        height="80vh"
      />

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>New Meeting Slot – {selectedDate}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Meeting Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddEvent}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

const [requests, setRequests] = useState([]);

const sendRequest = (event) => {
  setRequests([...requests, { ...event, status: 'Pending' }]);
};

// Example: accept/decline
const handleAccept = (index) => {
  const updated = [...requests];
  updated[index].status = 'Accepted';
  setRequests(updated);
};
