export default function productStore() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([{ id: 10001, name: 'Disfraz-Arlequin-1', description:'Traje de Arlequin de pana en rombos blancos y negros', precio: '$ 4000'}, 
        { id: 10002, name: 'Disfraz-Arlequin-2'}, 
        { id: 10003, name: 'Disfraz-Arlequin-3'}, 
        { id: 10004, name: 'Disfraz-Arlequin-4'}, 
        { id: 10005, name: 'Disfraz-Arlequin-5'}, 
        { id: 10006, name: 'Disfraz-Arlequin-6'}]);
      }, 3000);
    });
  };
  
  