import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';

export default function Home() {
  const fontSize = { xs: 12, md: 14 };
  return (
    <Container maxWidth='lg'>
      <Grid container mt={2} columnSpacing={4}>
        <Grid item xs={6} md={3}>
          <Typography variant="h6">Contact us</Typography>
          <Box mt={1}>
            <Typography fontSize={fontSize} gutterBottom>
              <b>Phone: +852 56128952</b>
            </Typography>
            <Typography fontSize={fontSize} gutterBottom>
              <b>Whatsapp: +852 67618902</b> 
            </Typography>
            <Typography fontSize={fontSize} gutterBottom>
              <b>Email: inquiry@jeansin.hk</b>
            </Typography>
            <Typography fontSize={fontSize} gutterBottom>
              <b>Open hours: 10am - 8pm</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h6">Customer services</Typography>
          <Box mt={1}>
            <Typography fontSize={fontSize} gutterBottom>
              <b>Shipping method</b>
            </Typography>
            <Typography fontSize={fontSize} gutterBottom>
              <b>Privacy policy</b> 
            </Typography>
            <Typography fontSize={fontSize} gutterBottom>
              <b>Return Policy</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h6">Payment</Typography>
          <Box mt={1}>
            <Typography fontSize={fontSize} gutterBottom>
              <b>Cash</b>
            </Typography>
            <Typography fontSize={fontSize} gutterBottom>
              <b>Visa</b> 
            </Typography>
            <Typography fontSize={fontSize} gutterBottom>
              <b>Mastercard</b>
            </Typography>
            <Typography fontSize={fontSize} gutterBottom>
              <b>Payme</b>
            </Typography>
            <Typography fontSize={fontSize} gutterBottom>
              <b>Apple Pay</b>
            </Typography>
            <Typography fontSize={fontSize} gutterBottom>
              <b>FPS</b>
            </Typography>
            <Typography fontSize={fontSize} gutterBottom>
              <b>Alipay</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h6">Location</Typography>
          <Box mt={1}>
            <Typography fontSize={fontSize} gutterBottom>
              <b>
              SHOP 5, 12/F, KCP, KOWLOON CITY, HONG KONG
              </b>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box className="socialMedia" display='flex' justifyContent={{ xs: 'center', md: 'flex-start' }} mt={2} gap={0.5}>
        <IconButton><InstagramIcon/></IconButton>
        <IconButton><FacebookIcon/></IconButton>
        <IconButton><WhatsAppIcon/></IconButton>
        <IconButton><XIcon/></IconButton>
      </Box>
    </Container>
  );
}