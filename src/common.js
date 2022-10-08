export const getLsItem = (name) => 
  localStorage.getItem(name);

export const setLsItem = (name, value) => 
  localStorage.setItem(name, value);

export const getHistory = () => 
  getLsItem("history") ? JSON.parse(getLsItem("history")) : [];

export const getFavorite = () => 
  getLsItem("favorite") ? JSON.parse(getLsItem("favorite")) : [];

export const setFavorite = (setFavoriteState,id) => {
  let favorite = getFavorite();
  if (favorite.indexOf(id) ==-1){
    let tempArray = JSON.stringify(Array.from(new Set([...favorite, id])));
    setLsItem("favorite", tempArray);
    setFavoriteState(tempArray);
  }else{
    let tempArray = JSON.stringify(favorite.filter(item => item !== id));
    setLsItem("favorite", tempArray);
    setFavoriteState(tempArray);
  }
};
export const setHistory = (id) => {
  let history = getLsItem("history") ? JSON.parse(getLsItem("history")) : [];
  setLsItem("history", JSON.stringify(Array.from(new Set([...history, id]))));
};

