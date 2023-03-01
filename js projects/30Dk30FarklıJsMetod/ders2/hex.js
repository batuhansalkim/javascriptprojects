//SORU 1
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
{
    //SORU 2
    //input [[4,3,2,-1], [3,-2,-1,6],[5,-4,0,-1]] kac - li deger var => 5 


    // const solution = (arr) => {
    //     let newArr = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         for (let j = 0; j < arr[i].length; j++) {
    //             if (arr[i][j] < 0) {
    //                 newArr.push(arr[i][j]);
    //             }
    //         }

    //     }
    //     return newArr.length;
    // }
    // console.log(solution([[4, 3, 2, -1], [3, -2, -1, 6], [5, -4, 0, -1]]))

}
//SORU 3
{
    //[555,901,899,1276,12]=> cift basamaklı 2 sayı var : output : 2

    // const solution = (arr)=>{
    //     return arr.filter(r=> r.toString().length %2==0).length
    // }
    // console.log(solution([555, 901, 899, 1276, 12]))
}
//SORU 4
{
    // input n= 5=> 5 elemanlı dizi yap ama toplamları 0 olsun [1,2,0,-2,-1]

    // const solution = (num)=>{
    //     let newArr=[];

    //     if(num%2==1){
    //         newArr.push(0);
    //     }

    //     for(let i=1; i<num/2; i++){
    //         newArr.push(i);
    //         newArr.unshift(-i);
    //     }
    //     return newArr;
    // }
    // console.log(solution(5))
}
//SORU 5
{
    // n = 434 => 4*3*4=>48, 4+3+4=11 result=> 48-11=37;

    // const solution = (num)=>{
    //     let revizeNum = num.toString().split("").map(Number);
    //     return revizeNum.reduce((a,b)=> a*b,1) - revizeNum.reduce((a,b)=> a+b,0);
    // }
    // console.log(solution(434))

}
//SORU 6
{
    
}











































