export default function oneProduct() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([{ id: 10001, name: 'Disfraz-Arlequin-1 ', description:'Traje de Arlequin de pana en rombos blancos y negros', precio: '$ 4000'}]);
      }, 3000);
    });
  };  
