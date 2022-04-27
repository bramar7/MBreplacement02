import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { DashboardLayout } from '../components/dashboard-layout';
// ----------------------------------------------------------------------
import { useState } from 'react';
import { useCallback, useEffect, useMemo } from 'react';
import { useSnackbar } from 'notistack';
// next
import { useRouter } from 'next/router';
// form
import { useForm, Controller } from 'react-hook-form';
 import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Button, Tabs, Tab, Card, Grid, Stack, Switch, Typography, TextField, FormControlLabel } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DatePicker from '@mui/lab/DatePicker';
// utils
import { fData } from '../utils/formatNumber';
import { FileUploader } from "react-drag-drop-files";
// _mock
import { cmptype } from '../__mocks__/__cmptype';
import { cmpcategory } from '../__mocks__/__cmpcategory';
import { countries } from '../__mocks__/_countries';
// components
import Label from '../components/Label';
import { FormProvider, RHFSelect, RHFSwitch, RHFTextField, RHFUploadAvatar } from '../components/hook-form';

// ----------------------------------------------------------------------

NewCampaign.propTypes = {
  isEdit: PropTypes.bool,
  currentUser: PropTypes.object,
};

export default function NewCampaign({ isEdit = false, currentUser }) {

  const { push } = useRouter();
/*  const { enqueueSnackbar } = useSnackbar(); */

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const NewCampaignSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email(),
    phoneNumber: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    country: Yup.string().required('country is required'),
    company: Yup.string().required('Company is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    role: Yup.string().required('Role Number is required'),
    avatarUrl: Yup.mixed().test('required', 'Avatar is required', (value) => value !== ''),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentUser?.name || '',
      email: currentUser?.email || '',
      phoneNumber: currentUser?.phoneNumber || '',
      address: currentUser?.address || '',
      country: currentUser?.country || '',
      state: currentUser?.state || '',
      city: currentUser?.city || '',
      zipCode: currentUser?.zipCode || '',
      avatarUrl: currentUser?.avatarUrl || '',
      isVerified: currentUser?.isVerified || true,
      status: currentUser?.status,
      company: currentUser?.company || '',
      role: currentUser?.role || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser]
  );

  const methods = useForm({
    resolver: yupResolver(NewCampaignSchema),
    defaultValues,
  });


  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (isEdit && currentUser) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentUser]);

  
  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      push(app.user.list);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'avatarUrl',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );
 
    return (
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{  width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', m: 4 }}>
          <Box sx={{ alignItems: 'center', display: 'column', justifyContent: 'space-between', flexWrap: 'wrap', marginLeft: 4 }}>
            <Typography sx={{ m: 1 }} variant="h4">
              New Campaign
            </Typography>
            <Typography sx={{ m: 1 }} variant="h6">
              Add a new Campaign
            </Typography>
          </Box>
          <Box sx={{ m: 1, marginRight: 11 }}>
            <Button color="error" variant="outlined" startIcon={<ArrowBackIosIcon />} href="/" sx={{ ml: 100, mr: 5 }}>
              Back
            </Button>
          </Box>
        </Box> 
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ py: 10, px: 3 }}>
              {isEdit && (
                <Label
                  color={values.status !== 'active' ? 'error' : 'success'}
                  sx={{ textTransform: 'uppercase', position: 'absolute', top: 24, right: 24 }}
                >
                  {values.status}
                </Label>
              )}

              <Box sx={{ mb: 5 }}>
              </Box>

              {isEdit && (
                <FormControlLabel
                  labelPlacement="start"
                  control={
                    <Controller
                      name="status"
                      control={control}
                      render={({ field }) => (
                       <Switch
                         {...field}
                         checked={field.value !== 'active'}
                         onChange={(event) => field.onChange(event.target.checked ? 'banned' : 'active')}
                       />
                      )}
                  />
                  }
                  label={
                    <>
                      <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                        Banned
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Apply disable account
                      </Typography>
                    </>
                  }
                  sx={{ mx: 0, mb: 3, width: 1, justifyContent: 'space-between' }}
                />
              )}

             <RHFSwitch
               name="isVerified"
               labelPlacement="start"
               label={
                 <>
                   <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                     Email Verified
                   </Typography>
                   <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     Disabling this will automatically send the user a verification email
                   </Typography>
                 </>
               }
               sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
              />
            </Card>
          </Grid>


          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Box
                sx={{
                  display: 'grid',
                  columnGap: 2,
                  rowGap: 3, marginRight: 10,
                  gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
                }}
              >
                <RHFTextField name="name" label="Full Name" />
                <RHFTextField name="email" label="Email Address" />
                <RHFTextField name="phoneNumber" label="Phone Number" />

                <RHFSelect name="country" label="Country" placeholder="Country">
                  <option value="" />
                  {countries.map((option) => (
                    <option key={option.code} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </RHFSelect>

                <RHFTextField name="state" label="State/Region" />
                <RHFTextField name="city" label="City" />
                <RHFTextField name="address" label="Address" />
                <RHFTextField name="zipCode" label="Zip/Code" />
                <RHFTextField name="company" label="Company" />
                <RHFTextField name="role" label="Role" />
                <Controller
                  name="startDate"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <DatePicker
                      {...field}
                      label="Start date"
                      inputFormat="dd/MM/yyyy"
                      renderInput={(params) => (
                        <TextField fullWidth {...params} error={!!error} helperText={error?.message} />
                      )}
                    />
                  )}
                />
                <Controller
                  name="endDate"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <DatePicker
                      {...field}
                      label="End date"
                      inputFormat="dd/MM/yyyy"
                      renderInput={(params) => (
                        <TextField fullWidth {...params} error={!!error} helperText={error?.message} />
                      )}
                    />
                  )}
                />
              </Box>

              <Stack alignItems="flex-end" sx={{ mt: 3, marginRight: 10 }}>
                <LoadingButton type="submit" variant="contained" color="error" loading={isSubmitting}>
                  {!isEdit ? 'Create Campaign' : 'Save Changes'}
                </LoadingButton>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </FormProvider>
        );
}

NewCampaign.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );