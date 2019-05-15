// 算法一   随机生成10到100之间的10个数，去重后排序
export function RangeNumberNoRepeatSort() {
    let result = [];
    for (let i = 0; i < 10; i += 1) {
        result.push(Math.floor(Math.random(0, 1) * 90) + 10)
    }
    const resultNoRepeat = Array.from(new Set(result));
    return resultNoRepeat.sort();
}

// 算法二   js 实现二叉查找树
export function BinarySearch(arr,str,leftIndex,rightIndex) {
    const mid = Math.floor((leftIndex+rightIndex)/2);
    const midValue = arr[mid];
    if(midValue>str){
        BinarySearch(arr,str,leftIndex,mid);
    }else if(midValue<str){
        BinarySearch(arr,str,mid,rightIndex);
    }else{
        return mid
    }
}

export default {
    RangeNumberNoRepeatSort,
    BinarySearch,
}