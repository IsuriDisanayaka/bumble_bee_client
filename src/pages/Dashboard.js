import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from '../components/Chart';

function Dashboard() {
  return (
    <div>
       <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    width:600,
                    height: 360,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
    </div>
  )
}

export default Dashboard
