import { Grid, Paper, Typography } from '@mui/material';

export default function Dashboard() {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h2">Meetings</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h2">Wallet</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
import React from 'react';
import { Grid, Paper } from '@mui/material';
import MeetingCalendar from '../components/MeetingCalendar';

function Dashboard() {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2 }}>
          <MeetingCalendar />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <h3>Confirmed Meetings</h3>
          <p>Accepted meetings will appear here.</p>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
