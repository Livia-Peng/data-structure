/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const answer = new Array(temperatures.length).fill(0);
    const stack = [];
    for (let i = temperatures.length - 1; i >= 0; i -= 1) {
        while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) { 
            stack.pop()
        }
        if (stack.length) {
            answer[i] = stack[stack.length-1] - i
        }
        stack.push(i)
    }
    return answer
};
var dailyTemperatures1 = function (temperatures) {
    const answer = new Array(temperatures.length).fill(0);
    const stack = [];
    for (let i = 0; i < temperatures.length; i += 1) {
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) {
            const idx = stack[stack.length-1];
            answer[idx] = i - idx;
            stack.pop()
        }
        stack.push(i)
    }
    return answer
};