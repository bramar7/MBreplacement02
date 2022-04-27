import { Box, Button, Card, CardContent, TextField, InputAdornment, SvgIcon, Typography } from '@mui/material';
import { Download as DownloadIcon } from '../../icons/download';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
  
export const ExecutionListToolbar = (props) => (

    <Box {...props}>

      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Box 
            sx={{ alignItems: 'center', display: 'column', justifyContent: 'space-between', flexWrap: 'wrap', marginLeft: 4 }}
        >
          <Typography sx={{ m: 1 }} variant="h4">
            Execution
          </Typography>
          <Typography sx={{ m: 1 }} variant="h6">
            Steps before moving Campaign to Production
          </Typography>
        </Box>
        <Box sx={{ m: 1 }}>
          <Button color="error" variant="outlined" startIcon={<ArrowBackIosIcon />} href="/">
            Back
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3, ml: 14 }}>
         <Button color="error" variant="text" href="/" sx={{ fontSize: 16 }}>
            Validation
         </Button>
         <Button color="error" variant="text" href="/" sx={{ fontSize: 16, ml:12 }}>
            Load Targeted Audiences
         </Button>
         <Button color="error" variant="text" href="/" sx={{ fontSize: 16, ml:12 }}>
            Email Notification for Targeted Audience
         </Button>
         <Button color="error" variant="text" href="/" sx={{ fontSize: 16, ml:12 }}>
            Load Coupon Codes
         </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search product"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
);

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
  