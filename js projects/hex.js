//sortting an array 
//[4,6,2,20,10]

const sorting = (arr) =>{
    for(let i=0; i<arr.length; i++){
        let temp = arr[j];
        for(let j=0; j<arr.length; j++){
            if(arr[j] > arr[j+1]){
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

console.log(sorting([4,6,2,20,10]));




















