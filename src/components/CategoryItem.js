import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";

export default function CategoryItem(props) {
  const { src, name, price } = props;
  return (
    <Grid item xs={6} md={4} textAlign='center'>
      <Box display='flex' flexDirection='column' alignItems='center' sx={{ cursor: 'pointer', transition: '0.2s', '&:hover': { transform: 'scale(1.1)' } }}>
        <Box sx={{ width: { xs: 150, md: 300 }, height: { xs: 150, md: 300 } }}>
          <div style={{ width: '100%', height: '100%', position: 'relative'}}>
            <Image
              src={src}
              alt="item_pic"
              layout='fill'
              sizes='100%'
              style={{ objectFit:'contain' }}
            />
          </div>
        </Box>
        <Typography mt={1} variant="subtitle2">{name}</Typography>
        <Typography fontSize={12}>${price} HKD</Typography>
      </Box>
    </Grid>
  );
}
