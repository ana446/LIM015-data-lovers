//show filter by role
export const showFilterRols = (dataLolArray , roles) => {
  const filterRolsLolData = ({tags}) => tags.includes(roles);
  const filterRolsLol = dataLolArray.filter(filterRolsLolData );
  return filterRolsLol;
};

// show filter by difficulty

export const showFilterByDifficulty = (dataLolArray) => {
 const  filterByDifficulty = dataLolArray.sort((a,b)=>a.info.difficulty - b.info.difficulty);
 return filterByDifficulty;

 };

 // search Lol 
export const searchLol = (dataLolArray , searchString) => {
  const searchStringLol = (dataLolArray)=> dataLolArray.name.toLowerCase().includes(searchString.toLowerCase());
  const searchChampions = dataLolArray.filter(searchStringLol);
  return searchChampions;
};
  

