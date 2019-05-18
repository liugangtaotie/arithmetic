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
export function BinarySearch(arr, str, leftIndex, rightIndex) {
    const mid = Math.floor((leftIndex + rightIndex) / 2);
    const midValue = arr[mid];
    if (midValue > str) {
        BinarySearch(arr, str, leftIndex, mid);
    } else if (midValue < str) {
        BinarySearch(arr, str, mid, rightIndex);
    } else {
        return mid
    }
}

// 算法三   理解js的任务队列（宏任务、微任务）
export function JsAsyncEvent() {
    console.log('1');

    setTimeout(function () {
        console.log('2');
        process.nextTick(function () {
            console.log('3');
        })
        new Promise(function (resolve) {
            console.log('4');
            resolve();
        }).then(function () {
            console.log('5')
        })
    })

    new Promise(function (resolve) {
        console.log('6');
        resolve();
    }).then(function () {
        console.log('7')
    })

    process.nextTick(function () {
        console.log('8');
    })

    setImmediate(() => {
        console.info('9')
    })

    new Promise(function (resolve) {
        console.log('10');
        resolve();
    }).then(function () {
        console.log('11')
    })

    setTimeout(function () {
        console.log('12');

        setImmediate(() => {
            console.info('13')
        })

        process.nextTick(function () {
            console.log('14');
        })
        new Promise(function (resolve) {
            console.log('15');
            resolve();
        }).then(function () {
            console.log('16')
        })
    })

    process.nextTick(function () {
        console.log('17');
    })
}



export default {
    RangeNumberNoRepeatSort,
    BinarySearch,
    JsAsyncEvent,
}