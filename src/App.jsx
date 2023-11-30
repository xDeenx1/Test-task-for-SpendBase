import * as React from 'react';
import { Grid, Typography, Box, Switch, FormControlLabel } from '@mui/material';
import TreeFilter from './components/TreeFilter';

const App=()=> {
  const [isAdmin, setIsAdmin] = React.useState(false);
  const handleToggle = (e) => {
   setIsAdmin(e.target.checked);
  };

  return (
    <Grid item xs={12} sm={6} sx={{m: "0 auto"}}>
      <Box sx={{ mb: 1, mt: 4 , m: '0 auto'}}>
        <FormControlLabel
          control={
            <Switch
              checked={isAdmin}
              onChange={handleToggle}
              name="Admin access togle"
            />
          }
          label="Admin access togle"
        />
      </Box>
      <Grid container direction="column" justify={"center"}>
        <Box m={1}>
          <Typography variant="h6">Search by name</Typography>
          <TreeFilter isAdmin={isAdmin}/>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;

