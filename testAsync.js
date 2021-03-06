import { resolve } from "path";
import { setTimeout } from "timers";

// 测试async

async function testAsync() {
    return 'Hello Async'
}

const result = testAsync()
console.log(result)

// 测试await

function getSomething(){
    return 'something'
}

async function testAsync(){
    return 'Hello Async'
}

async function test () {
    const v1 = await getSomething()
    const v2 = await testAsync()
    console.log(v1, v2)
}

test()


function takeLongTime(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('long_time_value')
        }, 1000)
    })
}

async function test(){
    const v = await takeLongTime()
    console.log(v)
}

test()



