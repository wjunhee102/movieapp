import { useState, useEffect } from 'react';

const Theater = [
    {
        name : "first",
        exp : 50
    }
]


const SeatingCount = state =>{
    const [ theaterSeat, setTSeat ] = useState([]);

    const TheaterCount = (min, max)=> {
        return Math.random() * (max - min) + min;
      }

    const count = () => {
        let i = 0
        let RandomNum = [];
    
        while(i < 10) {
            let newRandomNum = [];
            let randomNum = TheaterCount(5, 25);
            let num = Math.floor(randomNum);
            let mid = ()=> {
                let ii
                if(RandomNum.length <= 3) {
                    ii = RandomNum.length -1
                    if(ii <= 0) {
                        ii = 0
                    }
                } else {
                    ii = Math.floor((RandomNum.length-1)/2)
                }
                return ii
            } ;

            let midValue = RandomNum[mid()];

            if(!RandomNum[0]) {
                newRandomNum = [num]
            } else {
                if( num <= RandomNum[0] || num >= RandomNum[RandomNum.length-1]) {
                    if(num < RandomNum[0]) {
                        newRandomNum = [num, ...RandomNum]
                    } else if(num > RandomNum[RandomNum.length-1]){
                        newRandomNum = [...RandomNum, num]
                    } else {
                        newRandomNum = [...RandomNum]
                    }
                } else {
                    newRandomNum = [RandomNum[0]]
                    for(let ii = 1; ii < RandomNum.length; ii++) {
                        if(RandomNum[ii-1] < num && num < RandomNum[ii]) {
                            newRandomNum = [...newRandomNum, num, RandomNum[ii]]
                        } else {
                            newRandomNum = [...newRandomNum, RandomNum[ii]]
                        }
                    }
                }
            }
            
            console.log(newRandomNum, mid(), midValue, num)
            
            RandomNum = newRandomNum;

            // const findValue = RandomNum.find(ele => ele == num)
            // if(!findValue) RandomNum.push(num);
    

            i = RandomNum.length;
        }
        setTSeat(RandomNum);
    }

    useEffect(()=>{
        count();
    },[])
    
    useEffect(()=> {
        console.log(theaterSeat);
    },[theaterSeat])
}


export default SeatingCount;
