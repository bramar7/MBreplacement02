import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DesktopTimePicker from '@mui/lab/DesktopTimePicker';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { Avatar, Typography, Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material';

export default function EmailNotification (props) {

  const [values, setValues] = useState({
    avatar: '/static/images/avatars/hertz.png',
    name: 'XB_2021_CONTEST2',
    loaddate: 'Mar 14, 2021',
    sequence: 'CP_7899900'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const [value, setValue] = React.useState(new Date());

  return (
    <form
    autoComplete="off"
    noValidate
    {...props}
    >
       <Card>
           <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'row', mt: 2 }}>
              <Avatar
                 src={values.avatar} variant="rounded"
                 sx={{ height: 64, mb: 2, width: 94, mr: 4, ml: 4 }}
              />
              <Typography color="textPrimary" gutterBottom variant="h6">
                  {values.name}
              </Typography>
           </Box>
             <Divider />
         <CardContent>
           <Grid container spacing={3}>  
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3} direction = 'row' m={4}>
                  <DesktopDatePicker
                    label="Start Date"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DesktopDatePicker
                    label="End Date"
                    value={value}
                    minDate={new Date('2017-01-01')}
                    onChange={(newValue) => {
                         setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DesktopTimePicker
                    label="Start Time"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
           </Grid>
         </CardContent>
             <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }} >
          <Button color="primary" variant="contained" >
            Save Changes
          </Button>
        </Box>
    </Card>
    </form>
  );
}