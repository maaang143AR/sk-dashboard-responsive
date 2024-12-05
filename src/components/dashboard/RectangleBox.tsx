import { Box, Typography } from "@mui/material";

const RectangleBox = ({ label, value }: { label: string; value: number }) => {
  return (
    <Box
      sx={{
        bgcolor: "#7f7fd5",
        borderRadius: "10px",
        gridColumnStart: 1,
        gridColumnEnd: 3,
        display: "flex",
        p: "0px 1rem",
        justifyContent: "space-between",
        alignItems: "center",

        "@media (max-width: 550px) and (max-height:930px) ": {
          gridColumnStart: 1,
          gridColumnEnd: 6,
          bgColor:"blue",
          alignItems: "center",
          
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "3rem",
          
          "@media (max-width: 430px)": {
            fontSize: "2rem",
          },
          "@media (min-width: 1000px)": {
            fontSize: "5rem",
          },
          fontWeight: "bold",
        }}
      >
        {label}
      </Typography>
      <Typography sx={{
         "@media (max-width: 430px)": {
          fontSize: "2rem",
        },
        "@media (min-width: 1000px)": {
          fontSize: "5rem",
        },
         fontSize: "3rem", fontWeight: "bold"
        }}>
        {label === "Achieved %" ? value + "%" : value}
      </Typography>
    </Box>
  );
};

export default RectangleBox;
