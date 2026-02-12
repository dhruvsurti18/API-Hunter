import { TextField } from "@mui/material";

function Search({ search, setSearch }) {
  return (
    <TextField
      fullWidth
      label="Search Meal"
      variant="outlined"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search;
