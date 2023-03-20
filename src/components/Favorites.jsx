import { useGlobalContext } from "../Context";

const Favorites = () => {
  const { favorites, selectMeal, removeToFavorites } = useGlobalContext();

  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((favorite) => {
            const { idMeal: id, strMealThumb: img } = favorite;
            return (
              <div key={id} id={id} className="favorite-item">
                <img
                  src={img}
                  className="favorites-img img"
                  onClick={() => selectMeal(id, true)}
                />
                <button
                  className="remove-btn"
                  onClick={() => removeToFavorites(id)}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
