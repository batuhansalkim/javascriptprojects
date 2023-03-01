{ 
//SORU 1
//[8,4,6,2,3,] => output => [4,2,4,2,3] --> birbirinden cıkararak ilerleme metotları


// const solution = (arr)=>{
//     return arr.map((_,i)=>{
//         for(let j = i+1; j<arr.length;j++){
//             if(arr[i]> arr[j]){
//                 arr[i] = arr[i] - arr[j];
//                 break;
//             }
//         }
//         return arr[i];
//     })
// }

// console.log(solution([8, 4, 6, 2, 3,]));
}

//SORU 2

//input [[4,3,2,-1], [3,-2,-1,6],[5,-4,0,-1]] kac - li deger var => 5 


const solution = (arr)=>{
    return arr.map(row=> row.filter(r=> r<0).length).reduce((a,b)=> a+b, 0);
}

console.log(solution([[4, 3, 2, -1], [3, -2, -1, 6], [5, -4, 0, -1]]))














































