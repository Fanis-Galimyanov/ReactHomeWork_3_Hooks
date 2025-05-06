import {useMemo, useState} from 'react'

export default function Task3Main(){
    const [array, setArray] = useState([]);
    let summa = 0;
     
      const randArrGen = function(){
         const localArray = [];
         const min = Math.ceil(1);
         const max = Math.floor(100);
         for (let i = 0; i < 20; i++) {
             let randElem = Math.floor(Math.random() * (max - min + 1)) + min;
             localArray.push(randElem);
         }
         return localArray;
     }

       const sumArrayElement = function(localArray){
            let localSum = 0;
            localArray.forEach((elem) => localSum += elem);

            return localSum;
        }
       
        summa = useMemo(() => sumArrayElement(array),[array]);
       

    return(
        <>
            <p><button onClick={() => setArray(randArrGen)}> Сгенегрировать </button></p>

            <p><span>Случайные числа: </span>{array.map(function(elem, index){
                return <span key = {index}> {elem} </span>
            })}</p>
            <p><span>Сумма случайных чисел: {summa}</span></p>

        </>
    );
}