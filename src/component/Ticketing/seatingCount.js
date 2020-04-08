import { useState, useEffect } from 'react';

const Theater = [
    {
        rank : "1",
        exp : 200
    },
    {
        rank : "2",
        exp : 175
    },
    {
        rank : "3",
        exp : 150
    },
    {
        rank : "4",
        exp : 120
    },
    {
        rank : "5",
        exp : 120
    },
    {
        rank : "6",
        exp : 100
    },
    {
        rank : "7",
        exp : 80
    },
    {
        rank : "8",
        exp : 70
    },
    {
        rank : "9",
        exp : 60
    },
    {
        rank : "10",
        exp : 50
    }
]


const SeatingCount = state =>{
    const [ theaterSeat, setTSeat ] = useState([]);

    const TheaterCount = (min, max)=> {
        return Math.random() * (max - min) + min;
      }

    const count = (x) => {
        let i = 0
        let RandomNum = [];
        let seats = Math.floor(TheaterCount(0, x));
        while(i < seats) {
            let newRandomNum = [];
            let randomNum = TheaterCount(0, x);
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
            
            // console.log(newRandomNum, mid(), midValue, num)
            
            RandomNum = newRandomNum;

            // const findValue = RandomNum.find(ele => ele == num)
            // if(!findValue) RandomNum.push(num);
    

            i = RandomNum.length;
        }
        // console.log(seats)
        return RandomNum
    }

    const count2 = (x) => {
        let i = 0
        let RandomNum = [];
        let seats = Math.floor(TheaterCount(0, x));
        while(i < seats) {
            let newRandomNum = [];
            let rNum = TheaterCount(0, x);
            let num = Math.floor(rNum);

            if(!RandomNum[0]) {
                newRandomNum = [num]
            } else {
                if( num <= RandomNum[0] || num >= RandomNum[RandomNum.length-1]) {
                    if(num < RandomNum[0]) {
                        newRandomNum = [num, ...RandomNum]
                    } else if(num > RandomNum[RandomNum.length-1]){
                        newRandomNum = [...RandomNum, num]
                    } else {
                        newRandomNum = RandomNum
                    }
                } else {
                    newRandomNum = [RandomNum[0]]
                    let low, high, mid;
                    low = 1;
                    high = RandomNum.length-1;
                    while(low <= high) {
                        mid = (low + high)/2;
                        if(low !== high) {
                            if(num < RandomNum[mid]) {
                                high -= 1
                            } else if(num > RandomNum[mid]){
                                low += 1
                            } else if(num === RandomNum[mid]){
                                newRandomNum = RandomNum
                            }
                        } else {

                        }
                    }
                }
            }
            
            // console.log(newRandomNum, mid(), midValue, num)
            
            RandomNum = newRandomNum;

            // const findValue = RandomNum.find(ele => ele == num)
            // if(!findValue) RandomNum.push(num);
    

            i = RandomNum.length;
        }
        // console.log(seats)
        return RandomNum
    }

    function solution(array, commands) {
        var answer = [];
        var preArray = array;
        var newArray = [];
        console.log(preArray)
        for(var i = 0; i < commands[commands.length-1];i++){
            if(commands[i]===3) {
                console.log("3개의 명령어를 입력해주세요!");
                return answer = null
            }
            var c1 = commands[i][0];
            var c2 = commands[i][1];
            var c3 = commands[i][2];
            newArray = preArray.splice(c1,c2);
            let NewAnswer = preArray.slice(c1, c2);
            if(!answer[0]) {
                answer = [NewAnswer[c3-1]]
            } else {
                answer = [...answer, NewAnswer[c3-1]];
            }
            
            
            preArray = newArray;
            console.log(NewAnswer, answer);
        }
        
        return answer;
    }
    
    const seating = async () => {
        let aaa = await Theater.map(ele => {
            console.log(ele.exp)
            count(ele.exp)
        })
        return {aaa};
    }
    const aaaaa = [1,2,4,7,5,8,10,15,45,23,12]
    const bbbb = [[3,2,1], [2,3,2],[1,1,2]]
    useEffect(()=>{
        solution(aaaaa,bbbb)
        count(200);
        let bbb = []
        for(let i = 0; i < Theater.length; i++) {
            if(!bbb[0]) {
                bbb = [count(Theater[0].exp)]
            } else {
                bbb = [...bbb,count(Theater[i].exp)]
            }
        }
        // const bbb = [
        //     Theater.map(ele => {
        //         console.log(ele.exp)
        //         count(ele.exp)
        //     })

        // ]
        // const {aaa} = seating();
        setTSeat(bbb);
    },[])

    useEffect(()=> {
        console.log(theaterSeat);
    },[theaterSeat])
}


export default SeatingCount;
