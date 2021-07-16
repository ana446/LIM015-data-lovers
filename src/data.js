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

 //show order A-Z 

 export const orderByAlphabeticalAZ = (dataLolArray) => {
  const alphabetAZ = dataLolArray.sort((a,b) => 
    a.name.toLowerCase() > b.name.toLowerCase() ? 1:
    a.name.toLowerCase() < b.name.toLowerCase() ? -1 :
    0
  );
  return alphabetAZ ;
  
 };

 //show order Z-A

 export const orderByAlphabeticalZA = (dataLolArray) => {
  const alphabetZA =
        dataLolArray.sort ((b,a) => 
          a.name.toLowerCase() > b.name.toLowerCase() ? 1:
          a.name.toLowerCase() < b.name.toLowerCase() ? -1:
          0
        );
        // if (a.name.toLowerCase() > z.name.toLowerCase()) {
        //   return 1;
        // }
        // else if (a.name.toLowerCase() < z.name.toLowerCase() ){
        //   return -1;
    
        // } else {
        //   return 0;
        // }
      
      return alphabetZA;
 };

 // search Lol 
export const searchLol = (dataLolArray , searchString) => {
  const searchStringLol = (dataLolArray)=> dataLolArray.name.toLowerCase().includes(searchString.toLowerCase());
  const searchChampions = dataLolArray.filter(searchStringLol);
  return searchChampions;
};
  

