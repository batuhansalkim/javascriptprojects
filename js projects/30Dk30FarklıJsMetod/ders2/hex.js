//[8,4,6,2,3,] => output => [4,2,4,2,3] --> birbirinden cıkararak ilerleme metotları

// const solution = (arr) =>{
//     return arr.map((_,i)=>{
//         for(let j = i+1; j<arr.length; j++){
//             if(arr[i] >arr[j]){
//                 arr[i] = arr[i] - arr[j];
//                 break;
//             }
//         }
//         return arr[i];
//     })
// }

const solution = (arr)=>{
    return arr.map((_,i)=>{
        for(let j = i+1; j<arr.length;j++){
            if(arr[i]> arr[j]){
                arr[i] = arr[i] - arr[j];
                break;
            }
        }
        return arr[i];
    })
}

console.log(solution([8, 4, 6, 2, 3,]));


 















































