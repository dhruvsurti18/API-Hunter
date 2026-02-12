function ProductCard({ product }) {
  return (
    <div className="meal-card">

      <img
        src={product.strMealThumb}
        alt={product.strMeal}
        className="meal-image"
      />

      <div className="meal-title">
        {product.strMeal}
      </div>

    </div>
  );
}

export default ProductCard;
