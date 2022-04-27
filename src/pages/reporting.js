import Head from 'next/head';
import * as React from 'react';
import { useState } from 'react';
import { format } from 'date-fns';
import { sentenceCase } from 'change-case';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Card, Table, Avatar, Button, Divider, MenuItem, Container, Grid, Typography } from '@mui/material';
import { TableRow, TableBody, TableCell, TableHead, CardHeader, IconButton, TableContainer } from '@mui/material';
import { InputLabel, FormHelperText, FormControl, Select } from '@mui/material';
// previous usage
//import { AccountProfile } from '../components/account/account-profile';
//import { AccountProfileDetails } from '../components/account/account-profile-details';
import { DashboardLayout } from '../components/dashboard-layout';
// _mock
import { _recentReports } from '../__mocks__/_banking';
// utils
import { fCurrency } from '../utils/formatNumber';
// components
import Label from '../components/Label';
import Iconify from '../components/Iconify';
import Scrollbar from '../components/Scrollbar';
import MenuPopover from '../components/MenuPopover';

//const Account = () => (
export default function Account() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (

  <>
    <Head>
      <title>CM | Reporting</title>
    </Head>
 
     <Container sx={{ m: 2 }}>
        <Box sx={{  width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', m: 1 }}>
          <Box sx={{ alignItems: 'left', display: 'column', justifyContent: 'space-between', flexWrap: 'wrap', marginLeft: 1, marginTop: 1 }}>
            <Typography sx={{ m: 1 }} variant="h4">
              Reporting
            </Typography>
            <Typography sx={{ m: 1 }} variant="h6">
              Reports that are already available for Execution
            </Typography>
          </Box>
        </Box>

        <Card>
          <CardHeader title="Current Selection" color="error" sx={{ mb: 1 }} />
          <Scrollbar>
            <TableContainer sx={{ minWidth: 740 }}>
              <Table>
                <TableHead> 
                  <TableRow>
                    <TableCell>Reports</TableCell>
                    <TableCell>Last Run</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Format</TableCell>
                    <TableCell>Action</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                   {_recentReports.map((row) => ( 
                     <TableRow key={row.id}>
                       <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ ml: 2 }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {row.message}
                            </Typography>
                            <Typography variant="subtitle2"> {row.category}</Typography>
                            </Box>
                          </Box> 
                       </TableCell>

                       <TableCell>
                         <Typography variant="subtitle2">{format(new Date(row.date), 'dd MMM yyyy')}</Typography>
                           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {format(new Date(row.date), 'p')}
                         </Typography>
                       </TableCell>

                       <TableCell>
                         <Label
                            color={
                              (row.status === 'completed' && 'success') ||
                              (row.status === 'in_progress' && 'warning') ||
                               'error'
                                  }
                         >
                          {sentenceCase(row.status)}
                         </Label>
                       </TableCell>

                       <TableCell>
                          <FormControl sx={{ m: 1, minWidth: 120 }}>
                           <InputLabel id="demo-simple-select-helper-label">Format</InputLabel>
                             <Select
                               labelId="demo-simple-select-helper-label"
                               id="demo-simple-select-helper"
                               value={age}
                               label="Age"
                               onChange={handleChange}
                             >
                               <MenuItem value="">;
                                 <em>None</em>
                               </MenuItem>
                               <MenuItem value={10}>Ten</MenuItem>
                               <MenuItem value={20}>Twenty</MenuItem>
                               <MenuItem value={30}>Thirty</MenuItem>
                             </Select>


                          </FormControl>
                       </TableCell>

                       <TableCell align="right">
                        <MoreMenuButton />
                       </TableCell>

                     </TableRow>
                   ))}
                </TableBody>
              </Table>
            </TableContainer>  
          </Scrollbar>

          <Divider />

          <Box sx={{ p: 2, textAlign: 'right' }}>
            <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
              View All
            </Button>
        </Box>

        </Card>




     </Container>
    
  </>
  )
}

Account.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

function MoreMenuButton() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const ICON = {
    mr: 2,
    width: 20,
    height: 20,
  };

  return (
    <>
      <IconButton size="large" onClick={handleOpen}>
        <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        arrow="right-top"
        sx={{
          mt: -0.5,
          width: 160,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <MenuItem>
          <Iconify icon={'eva:download-fill'} sx={{ ...ICON }} />
          Download
        </MenuItem>

        <MenuItem>
          <Iconify icon={'eva:printer-fill'} sx={{ ...ICON }} />
          Print
        </MenuItem>

        <MenuItem>
          <Iconify icon={'eva:share-fill'} sx={{ ...ICON }} />
          Share
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ ...ICON }} />
          Delete
        </MenuItem>
      </MenuPopover>
    </>
  );
}


//export default Account;
/*

    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Account
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
    */
