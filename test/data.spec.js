<<<<<<< HEAD
=======
import { showFilterRols, showFilterByDifficulty, orderByAlphabeticalAZ, orderByAlphabeticalZA, searchLol, averageLol } from '../src/data.js';


describe('showFilterRols', () => {
  it('is a function', () => {
    expect(typeof showFilterRols).toBe('function');
  });

  it('Mostrar los filtros de los Roles', () => {
    const dataLolArray = [{tags:"Fighter"}, {tags:"Tank" }];
    expect(showFilterRols(dataLolArray,'Tank')).toEqual([{tags:'Tank'}]);
  });
});


describe('showFilterByDifficulty', () => {
  it('is a function', () => {
    expect(typeof showFilterByDifficulty).toBe('function');
  });

  it('Mostrar filtros segun dificultad de menor a mayor', () => {
    const dataLolArray = [{info:{difficulty:4}},{info:{difficulty:2}},{info:{difficulty:7}}];
    expect(showFilterByDifficulty(dataLolArray)).toEqual([{info:{difficulty:2}},{info:{difficulty:4}},{info:{difficulty:7}}]);
  });
});

describe('orderByAlphabeticalAZ', () => {
  it('es una funcion', () => {
    expect(typeof orderByAlphabeticalAZ).toBe('function');
  });
  
  it('Mostrar orden alfabetico de A - Z',() => {
    const dataLolArray = [{name:"Ekko"},{name:"Ahri"},{name:"Shen"},{name:"Zyra"}];
    expect(orderByAlphabeticalAZ(dataLolArray)).toEqual([{name:"Ahri"},{name:"Ekko"},{name:"Shen"},{name:"Zyra"}])
  });
});

describe('orderByAlphabeticalZA', () => {
  it('es una funcion', () => {
    expect(typeof orderByAlphabeticalZA).toBe('function');
  });
  
  it('Mostrar orden alfabetico de Z - A',() => {
    const dataLolArray = [{name:"Ekko"},{name:"Ahri"},{name:"Shen"},{name:"Zyra"}];
    expect(orderByAlphabeticalZA(dataLolArray)).toEqual([{name:"Zyra"},{name:"Shen"},{name:"Ekko"},{name:"Ahri"}])
  });
});

describe('searchLol', () => {
  it('es una funcion', () => {
    expect(typeof searchLol).toBe('function');
  });

  it('busca a los campeones', () =>{
    const dataLolArray = [{name:"Ekko"},{name:"Ahri"},{name:"Shen"},{name:"Zyra"}];
    expect(searchLol(dataLolArray, 'Zyra')).toEqual([{name:"Zyra"}]);
  });
});

describe('averageLol', () => {
  it('es una funcion', () => {
    expect(typeof averageLol).toBe('function');
  });

  it('promedio del campeones por roles', () => {
    const filtroRols = [{name:"Ekko"},{name:"Ahri"},{name:"Shen"},{name:"Zyra"}];
    expect(averageLol(filtroRols)).toEqual(3);
  });
});
>>>>>>> 8c4a85d52b89a703b4cdf548d775449ab2d49a40
