import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, TextField, MenuItem, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import { Selector as SelectorIcon } from '../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from './logo';
import { NavItem } from './nav-item';
import * as React from 'react';

const items = [
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/configuration',
    /* icon: (<UsersIcon fontSize="small" />), */
    icon: (<ConstructionOutlinedIcon fontSize="small" />),
    title: 'Configuration'
    /* it used to be Customers */
  },
  {
    href: '/execution',
    /* icon: (<ShoppingBagIcon fontSize="small" />), */
    icon: (<RocketLaunchIcon fontSize="small" />),
    title: 'Execution'
    /* it used to be Products */
  },
  {
    href: '/reporting',
    /* icon: (<UserIcon fontSize="small" />), */
    icon: (<ListOutlinedIcon fontSize="medium" />),
    title: 'Reporting'
    /* it used to be Account */
  },
  {
    href: '/settings',
    /* icon: (<CogIcon fontSize="small" />), */
    icon: (<UsersIcon fontSize="medium" />),
    title: 'Administration'
    /* it used to be Account */ 
  },
  {
    href: '/login',
    icon: (<LockIcon fontSize="small" />),
    title: 'Login'
  },
  {
    href: '/register',
    icon: (<UserAddIcon fontSize="small" />),
    title: 'Register'
  },
  {
    href: '/404',
    icon: (<XCircleIcon fontSize="small" />),
    title: 'Error'
  }
];

const allbrands = [
  {
    value: 'Virgin',
    label: 'Virgin Plus',
  },
  {
    value: 'Bell',
    label: 'Bell Canada',
  },
  {
    value: 'Lucky',
    label: 'Lucky Mobile',
  }
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  const [brand, setBrand] = React.useState('Virgin');

  const handleChange = (event) => {
    setBrand(event.target.value);
  };

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div>
          <Box sx={{ p: 1 }}>         
            <img src="/static/images/logo.png"/>
          </Box>

        </div>
        <Divider sx={{ borderColor: '#2D3748', my: 3 }}/>
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        
        <Box component="form"
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >
            <div>
               <TextField
                 id="outlined-select-brand"
                 select
                 label="Select"
                 value={brand}
                 onChange={handleChange}
                 helperText="Please select your brand"
               >
               {allbrands.map((option) => (
                 <MenuItem key={option.value} value={option.value}>
                   {option.label}
                 </MenuItem>
               ))}
              </TextField>
            </div>
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{ sx: { backgroundColor: 'neutral.100', color: '#FFFFFF', width: 280 }}}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { backgroundColor: 'neutral.100', color: '#FFFFFF', width: 280 }}}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};

/*
<NextLink href="/" passHref>
              <a>
                <Logo sx={{ height: 42, width: 42 }}/>
              </a>
            </NextLink>
*/
/*
<Box sx={{ px: 2, py: 3 }}>
<Typography color="neutral.100" variant="subtitle2">
  Need more features?
</Typography>
<Typography color="neutral.500" variant="body2">
  Check out our Pro solution template.
</Typography>
<Box sx={{ display: 'flex', mt: 2, mx: 'auto', width: '160px', '& img': { width: '100%' }}}>
  <img alt="Go to pro" src="/static/images/sidebar_pro.png"/>
</Box>
<NextLink href="https://material-kit-pro-react.devias.io/" passHref>
  <Button color="secondary" component="a" endIcon={(<OpenInNewIcon />)} fullWidth sx={{ mt: 2 }} variant="contained">
    Pro Live Preview
  </Button>
</NextLink>
</Box>
*/

/* <Divider sx={{ borderColor: '#2D3748' }} /> */

/*
       <Box sx={{ px: 2 }}>
            <Box sx={{ alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.04)', cursor: 'pointer', display: 'flex',
                justifyContent: 'space-between', px: 3, py: '11px', borderRadius: 1 }}>
              <div>
                <Typography color="inherit" variant="subtitle1">
                  Campaign Manager
                </Typography>
                <Typography color="neutral.400" variant="body2">
                  Your tier
                  {' '}
                  : Premium
                </Typography>
              </div>
              <SelectorIcon sx={{ color: 'neutral.500', width: 14, height: 14 }}/>
            </Box>
          </Box>
*/