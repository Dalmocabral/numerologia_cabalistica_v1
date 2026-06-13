import { Box, CircularProgress } from '@mui/material';
import { useLicense } from '../contexts/LicenseContext';
import { LicenseGate } from './LicenseGate';

export const RequireLicense = ({ children }: { children: JSX.Element }) => {
  const { isVerified, isLoading } = useLicense();

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!isVerified) {
    return <LicenseGate />;
  }

  return children;
};
