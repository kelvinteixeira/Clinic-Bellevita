import { Avatar, Box, Grid, Typography } from "@mui/material";

export const Team = () => {
  return (
    <Box sx={{
      // position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom, #BECEB4, #e7ede4b4)",
        filter: "blur(10px)",
        zIndex: -1,
      },
    }}>
      <Typography align="center" fontSize={40}>
        Nossa equipe
      </Typography>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Avatar
          sx={{ width: 350, height: 450 }}
          variant="square"
          src="/images/time1.png"
        />
        <Avatar
          sx={{ width: 250, height: 550 }}
          variant="circular"
          src="/images/jessica.png"
        />
        <img style={{ width: 250 }} src="/images/gatinha.png" alt="foto" />
        <img style={{ width: 300 }} src="/images/jessica.png" alt="foto" />
      </Grid>
    </Box>
  );
};
