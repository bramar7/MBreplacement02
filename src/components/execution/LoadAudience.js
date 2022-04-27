import { useState } from 'react';
import { Avatar, Typography, Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField, DatePicker } from '@mui/material';


export default function LoadAudience (props) {
  
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

  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
  
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
                fullWidth
                label="New Audience Name"
                helperText="Please specify Name for the New Audience"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12} >
              <TextField
                fullWidth
                label="New Audience Description"
                helperText="Please specify Description for the New Audience"
                name="lastName"
                onChange={handleChange}
                required
                value={values.prefix}
                variant="outlined"
              />
            </Grid>
            <Divider />
            <Box sx={{ display: 'row', justifyContent: 'center', paddingLeft: 18, paddingTop: 7, paddingBottom: 3 }} >
			        <input type="file" name="file" onChange={changeHandler} />
			         {isSelected ? (
				          <div>
					          <p>Filename: {selectedFile.name}</p>
					          <p>Filetype: {selectedFile.type}</p>
					          <p>Size in bytes: {selectedFile.size}</p>
					          <p>
						          lastModifiedDate:{' '}
						          {selectedFile.lastModifiedDate.toLocaleDateString()}
					          </p>
				          </div>
			                      ) : (
				           <p>Select a file to show details</p>
			            )}
			           <div>
				           <Button color="primary" variant="contained" onClick={handleSubmission}>Submit</Button>                  
			           </div>
            </Box>
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
};