import { Box, Button, Typography, Tabs, Tab } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import ValidateCampaign from '../execution/ValidateCampaign';
import LoadAudience from '../execution/LoadAudience';
import EmailNotification from '../execution/EmailNotification';
import LoadCouponCodes from '../execution/LoadCouponCodes';
import { maxWidth } from '@mui/system';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import * as React from 'react';
  

export const ExecutionListToolbar = () => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{  width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', m: -1 }}>
       <Box sx={{ alignItems: 'center', display: 'column', justifyContent: 'space-between', flexWrap: 'wrap', marginLeft: 4 }}>
          <Typography sx={{ m: 1 }} variant="h4">
            Execution
          </Typography>
          <Typography sx={{ m: 1 }} variant="h6">
            Steps before moving Campaign to Production
          </Typography>
        </Box>
        <Box sx={{ m: 1}}>
          <Button color="error" variant="outlined" startIcon={<ArrowBackIosIcon />} href="/" sx={{ ml: 100, mr: 5 }}>
            Back
          </Button>
        </Box>
  
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
           <Box sx={{ borderBottom: 1, borderColor: 'divider', marginLeft: 20, marginTop: 5 }}>
             <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Validation" value="1" />
              <Tab label="Load Targeted Audiences" value="2" />
              <Tab label="Email Notification for Targeted Audiences" value="3" />
              <Tab label="Load Coupon Codes" value="4" />
             </TabList>
           </Box>
              <TabPanel value="1"><ValidateCampaign /></TabPanel>
              <TabPanel value="2"><LoadAudience /></TabPanel>
              <TabPanel value="3"><EmailNotification /></TabPanel>
              <TabPanel value="4"><LoadCouponCodes /></TabPanel>
        </TabContext>
      </Box>

    </Box> 
  );
}; 

  /*
  <Button
            startIcon={(<UploadIcon fontSize="small" />)}
            sx={{ mr: 1 }}
          >
            Import
          </Button>
          <Button
            startIcon={(<DownloadIcon fontSize="small" />)}
            sx={{ mr: 1 }}
          >
            Export
          </Button>
*/
  