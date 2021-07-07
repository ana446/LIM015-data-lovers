export const showFilterRols = (dataLolArray , roles) => {
  
  const filterRolsLolData = ({tags}) => tags.includes(roles);
  const filterRolsLol = dataLolArray.filter(filterRolsLolData );
  return filterRolsLol;
};

export const anotherExample = () => {
  return 'OMG';
};
