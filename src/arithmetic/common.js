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
    console.log('1'); // 主程序首先执行
    setTimeout(function () { // 将事件插入了"任务队列"，必须等到当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数
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
    }, 1000)
    new Promise(function (resolve) {
        console.log('6');
        resolve();
    }).then(function () {
        console.log('7')
    })
    setTimeout(function () { // 将事件插入了"任务队列"，必须等到当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数
        console.log('18');
    })
    process.nextTick(function () {
        console.log('8'); // 在当前"执行栈"的尾部-->下一次Event Loop（主线程读取"任务队列"）之前-->触发process指定的回调函数
    })
    setImmediate(() => {
        console.info('9') // 主线程和事件队伍的函数执行完成之后立即执行  和setTimeOut(fn,0)差不多
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

// 算法四   理解正则表达式(. * + ?)
export function JsRegexCommon() {
    // 正则手机号码
    const phoneStr = '18658126322';
    const regPhone = /^1[3/4/5/6/7/8/9][0-9]{9}$/;
    console.info('1111', regPhone.test(phoneStr));

    // 正则邮箱
    const regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;

    const regTest = /^[a-z0-9]/;
    console.info(2222, regTest.test('#'));



}

export default {
    RangeNumberNoRepeatSort,
    BinarySearch,
    JsAsyncEvent,
    JsRegexCommon,
}