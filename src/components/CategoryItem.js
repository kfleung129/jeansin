import Image from "next/image";
import { Typography, Grid } from "@mui/material";

export default function CategoryItem(props) {
  const { src, name, price } = props;
  return (
    <Grid item xs={6} md={4} textAlign='center'>
      <Image
        src={src}
        height={200}
        width={300}
        sizes="100vw"
        style={{
            width: '100%',
            height: 'auto',
        }}
      />
      <Typography variant="subtitle2">{name}</Typography>
      <Typography fontSize={12}>${price} HKD</Typography>
    </Grid>
  );
}
