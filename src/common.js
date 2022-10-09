export const getLsItem = (name) => 
  localStorage.getItem(name);

export const setLsItem = (name, value) => 
  localStorage.setItem(name, value);

export const getHistory = () => 
  getLsItem("history") ? JSON.parse(getLsItem("history")) : [];

export const getFavorite = () => 
  getLsItem("favorite") ? JSON.parse(getLsItem("favorite")) : [];

export const getAchieve = () => 
  getLsItem("achieve") ? JSON.parse(getLsItem("achieve")) : [];

export const setRecord = (target,setState,id) => {
  const getList =  target=='favorite' ?  getFavorite():getAchieve();
  if (getList.indexOf(id) ==-1){
    let tempArray = JSON.stringify(Array.from(new Set([...getList, id])));
    setLsItem(target, tempArray);
    setState(tempArray);
  }else{
    let tempArray = JSON.stringify(getList.filter(item => item !== id));
    setLsItem(target, tempArray);
    setState(tempArray);
  }
};
export const setHistory = (id) => {
  let history = getLsItem("history") ? JSON.parse(getLsItem("history")) : [];
  setLsItem("history", JSON.stringify(Array.from(new Set([...history, id]))));
};


