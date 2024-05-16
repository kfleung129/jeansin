import { Box, Typography, Grid } from "@mui/material";
import CategoryItem from "@/components/CategoryItem"

export default function Home() {
  console.log('test')
  return (
    <Box display='flex' flexDirection='column' gap={5}>
      <Box>
        <Typography variant="h5">Trending</Typography>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 3, md: 8 }}>
          <CategoryItem
            src="/trend_1.png"
            name="New Balance 993 - Military Green"
            price={1099}
          />
          <CategoryItem
            src="/trend_2.webp"
            name="Salomon XT-6 Black"
            price={1099}
          />
          <CategoryItem
            src="/trend_3.png"
            name="Nike Air Force 1"
            price={1099}
          />
          <CategoryItem
            src="/trend_1.png"
            name="New Balance 993 - Military Green"
            price={1099}
          />
          <CategoryItem
            src="/trend_2.webp"
            name="Salomon XT-6 Black"
            price={1099}
          />
          <CategoryItem
            src="/trend_3.png"
            name="Nike Air Force 1"
            price={1099}
          />
        </Grid>
      </Box>
      <Box>
        <Typography variant="h5">New arrival</Typography>
        <Grid container columnSpacing={{ xs: 4, md: 8 }}>
          <CategoryItem
            src="/trend_1.png"
            name="New Balance 993 - Military Green"
            price={1099}
          />
          <CategoryItem
            src="/trend_1.png"
            name="New Balance 993 - Military Green"
            price={1099}
          />
          <CategoryItem
            src="/trend_1.png"
            name="New Balance 993 - Military Green"
            price={1099}
          />
        </Grid>
      </Box>
    </Box>
  );
}
