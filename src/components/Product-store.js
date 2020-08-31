import diz_1 from '../images/disfraz1.jpg';
import diz_2 from '../images/disfraz2.jpg';
import diz_3 from '../images/disfraz3.jpg';
import diz_4 from '../images/disfraz4.jpg';
import diz_5 from '../images/disfraz5.jpg';
import diz_6 from '../images/disfraz6.jpg';
import mas_1 from '../images/mascara1.jpg';
import mas_2 from '../images/mascara2.jpg';
import mas_3 from '../images/mascara3.jpg';
import mas_4 from '../images/mascara4.jpg';
import mas_5 from '../images/mascara5.jpg';
import mas_6 from '../images/mascara6.jpg';

export default function productStore() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([{ id: 10001, category:'disfraces', name: 'Disfraz-Arlequin-1', img:`${diz_1}`, description:'Traje de Arlequin de pana en rombos blancos y negros', precio: 4000}, 
        { id: 10002, category:'disfraces', name: 'Disfraz-Arlequin-2', img:`${diz_2}`, description:'Traje de Arlequin de pana en rombos blancos y negros', precio: 3000}, 
        { id: 10003, category:'disfraces', name: 'Disfraz-Arlequin-3', img:`${diz_3}`, description:'Traje de Arlequin de pana en rombos rojos y negros', precio: 7000}, 
        { id: 10004, category:'disfraces', name: 'Disfraz-Arlequin-4', img:`${diz_4}`, description:'Traje de Arlequin de pana en rombos verdes y negros', precio: 5000}, 
        { id: 10005, category:'disfraces', name: 'Disfraz-Arlequin-5', img:`${diz_5}`, description:'Traje de Arlequin de pana en rombos plateados y negros', precio: 2000}, 
        { id: 10006, category:'disfraces', name: 'Disfraz-Arlequin-6', img:`${diz_6}`, description:'Traje de Arlequin de pana en rombos blancos y rojos', precio: 6000},
        { id: 10006, category:'mascaras', name: 'Máscara -Arlequin-1', img:`${mas_1}`, description:'Máscara de Arlequin gotica', precio: 1500},
        { id: 10006, category:'mascaras', name: 'Máscara -Arlequin-2', img:`${mas_2}`, description:'Máscara de Arlequin gotica', precio: 1900},
        { id: 10006, category:'mascaras', name: 'Máscara -Arlequin-3', img:`${mas_3}`, description:'Máscara de Arlequin gotica', precio: 1200},
        { id: 10006, category:'mascaras', name: 'Máscara -Arlequin-4', img:`${mas_4}`, description:'Máscara de Arlequin gotica', precio: 1600},
        { id: 10006, category:'mascaras', name: 'Máscara -Arlequin-5', img:`${mas_5}`, description:'Máscara de Arlequin gotica', precio: 1700},
        { id: 10006, category:'mascaras', name: 'Máscara -Arlequin-6', img:`${mas_6}`, description:'Máscara de Arlequin gotica', precio: 1300}]);
      }, 3000);
    });
  };
  
  