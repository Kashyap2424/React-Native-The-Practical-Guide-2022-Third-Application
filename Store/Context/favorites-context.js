import { createContext } from "react";

const FavoritesContext = createContext({
  id: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

function FavoritesContextProvider({ children }) {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;
