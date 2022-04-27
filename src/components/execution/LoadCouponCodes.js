import { useState } from 'react';
import { Avatar, Typography, Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField, DatePicker } from '@mui/material';


export default function LoadCouponCodes (props) {

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
          <Grid container spacing={3} >
            <Grid item md={6} xs={12} >
            <TextField
                /* fullWidth */
                label="Last File Upload"
                name="fileUpload"
                readOnly
                value={values.loaddate}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12} >
              <TextField
                /* fullWidth */
                label="Last Sequence"
                name="sequence"
                readOnly
                value={values.sequence}
                variant="outlined"
              />
            </Grid>
      
            <Grid item md={6} xs={12} >
              <TextField
                /* fullWidth */
                helperText="Please specify Promo limit - total number of codes smaller then 100K"
                label="Promotion Limit"
                name="firstName"
                onChange={handleChange}
                required
                type="number"
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12} >
              <TextField
                /* fullWidth */
                label="Prefix"
                name="lastName"
                onChange={handleChange}
                value={values.prefix}
                variant="outlined"
                helperText="Please specify first couple of characters for Promo Code"
              />
            </Grid>
            <Grid item md={6} xs={12} >
              <TextField
                /* fullWidth */
                label="Length"
                name="email"
                onChange={handleChange}
                required
                type="number"
                value={values.email}
                variant="outlined"
                helperText="Please specify Promo Code length - max number is 15"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }} >
          <Button color="primary" variant="contained" >
            Load Codes
          </Button>
        </Box>
      </Card>
    </form>
  );
};

/*
            <Grid item md={6} xs={12} >
              <TextField
                 fullWidth 
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>

          <Grid item md={6} xs={12} >
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value} >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
*/