import { useEffect, useState } from "react";
import Search from "../components/Search";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { Container, Typography } from "@mui/material";

function Home() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
      );

      const data = await response.json();
      setMeals(data.meals);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch meals");
      setLoading(false);
    }
  };

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>

      <Typography
        variant="h4"
        align="center"
        sx={{ my: 3, fontWeight: "bold" }}
      >
        API-Hunter
      </Typography>

      <Search search={search} setSearch={setSearch} />

      {loading && <Loader />}
      {error && <Typography color="error">{error}</Typography>}

      <div className="meals-grid">
        {filteredMeals.map((meal) => (
          <ProductCard key={meal.idMeal} product={meal} />
        ))}
      </div>

    </Container>
  );
}

export default Home;
