import { Box, Container, Typography, Grid } from "@mui/material";
export default function Home() {
  return (
    <Container maxWidth='lg'>
      <Grid container mt={2} columnSpacing={4}>
        <Grid item xs={6} md={3}>
          <Typography variant="h6">Contact us</Typography>
          <Box mt={1}>
            <Typography variant="subtitle2" gutterBottom>
              <b>Phone: +852 56128952</b>
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <b>Whatsapp: +852 67618902</b> 
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <b>Email: inquiry@jeansin.hk</b>
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <b>Open hours: 10am - 8pm</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h6">Customer services</Typography>
          <Box mt={1}>
            <Typography variant="subtitle2" gutterBottom>
              <b>Shipping method</b>
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <b>Privacy policy</b> 
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <b>Return Policy</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h6">Payment</Typography>
          <Box mt={1}>
            <Typography variant="subtitle2" gutterBottom>
              <b>Cash</b>
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <b>Visa</b> 
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <b>Mastercard</b>
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <b>Payme</b>
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <b>Apple Pay</b>
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <b>FPS</b>
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <b>Alipay</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="h6">Location</Typography>
          <Box mt={1}>
            <Typography variant="subtitle2" gutterBottom>
              <b>
              SHOP 5, 12/F, KCP, KOWLOON CITY, HONG KONG
              </b>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* <Box className="socialMedia">
        Social Media
      </Box> */}
    </Container>
  );
}