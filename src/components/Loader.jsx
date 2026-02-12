import { CircularProgress, Box } from "@mui/material";

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loader;
