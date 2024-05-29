'use Client'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Btn_Neon } from '@/components/btn/btn_neon/Btn_Neon';
import { Btn_ConfirmV } from '@/components/btn/btn_confirmV/Btn_ConfirmV';
import { CardHover } from '../cardHover/CardHover';



export default function HomeViews () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 3, md: 10 }} columns={{ xs: 4, sm: 10, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <Btn_Neon/>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <CardHover/>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Btn_ConfirmV/>
          </Grid>
         
      </Grid>
    </Box>
  );
}

