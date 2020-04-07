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
        let aaa = [];
    
        while(i < 10) {
            let newAaa = [];
            let randomNum = TheaterCount(5, 25);
            let num = Math.floor(randomNum);
            let mid = ()=> {
                let i
                if(aaa.length <= 3) {
                    i = aaa.length -1
                    if(i <= 0) {
                        i = 0
                    }
                } else {
                    i = Math.floor((aaa.length-1)/2)
                    console.log(i)
                }
                return i
            } ;
            let midValue = aaa[mid()];
            
            let minArray = []
            let maxArray = []

            if(!aaa[0]) {
                newAaa = [num]
            } else {
                if( num <= aaa[0] || num >= aaa[aaa.length-1]) {
                    if(num < aaa[0]) {
                        newAaa = [num, ...aaa]
                    } else if(num > aaa[aaa.length-1]){
                        newAaa = [...aaa, num]
                    } else {
                        newAaa = [...aaa]
                    }
                } else {
                    newAaa = [aaa[0]]
                    for(let i = 1; i < aaa.length; i++) {
                        if(aaa[i-1] < num && num < aaa[i]) {
                            newAaa = [...newAaa, num, aaa[i]]
                        } else {
                            newAaa = [...newAaa, aaa[i]]
                        }
                    }
                }
            }

            // if(!midValue) {
            //     newAaa = [num]
            // } else {
            //     for(let iii = 0; iii < mid(); iii++) {
            //         if(iii === 0) {
            //             minArray = [aaa[iii]]
            //         } else {
            //             minArray = [...minArray, aaa[iii]];
            //         }
            //     }
            //     for(let iii = mid(); iii < aaa.length; iii++) {
            //         if(iii === mid()) {
            //             maxArray = [aaa[mid()]]
            //         } else {
            //             maxArray = [...maxArray, aaa[iii]];
            //         }
            //     }
    
            //     if(num > midValue) {
            //         if(num > aaa[aaa.length-1]) {
            //             newAaa = [...aaa, num];
            //         } else {
            //             newAaa = minArray;
            //             for(let ii = mid(); ii < aaa.length; ii++) {
            //                 if(num < aaa[ii]) {
            //                     newAaa = [...newAaa, num ,aaa[ii]]
            //                 }  else {
            //                     newAaa = [...newAaa, aaa[ii]];
            //                 }
            //             }
            //         }
            //     } else if(num < midValue) {
            //         if(num < aaa[0]) {
            //             newAaa = [num, ...aaa]
            //         } else {
            //             newAaa = maxArray;
            //             for(let ii = mid()-1; ii <= 0; ii--) {
            //                 if(num > aaa[ii]) {
            //                     newAaa = [aaa[ii],num,...newAaa]
            //                 } else {
            //                     newAaa = [aaa[ii],...newAaa];
            //                 }
            //             }
            //         }
            //     } else {
            //         newAaa = [...minArray, ...maxArray];
            //     }
            // }
            
            console.log(minArray, maxArray, newAaa, mid(), midValue, num)
            // console.log(aaa.length, midValue, mid());
            aaa = newAaa;
            // for(let ii = 0; ii < aaa.length; ii++) {
            //     if(num === aaa[ii]) {
                    
            //     }
            // }

            // const findValue = aaa.find(ele => ele == num)
            // if(!findValue) aaa.push(num);
    

            i = aaa.length;
        }
        setTSeat(aaa);
    }

    useEffect(()=>{
        count();
    },[])
    useEffect(()=> {
        console.log(theaterSeat);
    },[theaterSeat])
}


export default SeatingCount;
