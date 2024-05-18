'use client';
import { useState, useEffect } from 'react';
import { Box, Typography, Grid } from "@mui/material";
import CategoryItem from "@/components/CategoryItem";
import { getTrendingList, getItemPicUrl } from '@/util/util';

export default function Home() {
  const [trendingItems, setTrendingItems] = useState([]);
  useEffect(() => {
    const fetchTrending = async () => {
      const trendingList = await getTrendingList();
      setTrendingItems(trendingList);
    }
    fetchTrending();
  }, []);

  return (
    <Box display='flex' flexDirection='column' gap={5}>
      <Box>
        <Typography variant="h5">Trending</Typography>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 3, md: 8 }}>
          {
            trendingItems.map((item) => (
              <CategoryItem
                key={item.id}
                src={getItemPicUrl(item)}
                name={item.name}
                pirce={item.price}
              />
            ))
          }
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
