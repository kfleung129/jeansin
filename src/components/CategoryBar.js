'use client';
import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { AppBar, Toolbar, Container, Typography, Link as MuiLink } from '@mui/material';
import { getCategoryList } from '@/util/util';

function CategoryBar() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const categoryList = await getCategoryList();
      setCategory(categoryList);
    }
    fetchCategory();
  }, []);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4
          }}
        >
          {
            category.map((categoryItem) => (
              <MuiLink key={categoryItem.id} component={NextLink} href={categoryItem.href} sx={{ color:'white' }}>
                {categoryItem.name}
              </MuiLink>
            ))
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default CategoryBar;