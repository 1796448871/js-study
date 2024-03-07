const type = [2, 3, 6, 4, 5, 1, 6, 3, 2, 1];//计算类型
const Number1 = [6, 2, 9, 8, 3, 5, 12, 5, 4, 6];//数据1
const Number2 = [2, 1, 10, 4, 2, 2, 3, 1, 2, 2];//:数据2


//号码: const num=[5,8,0, 1,3,4,6,2,9, 7];
const num = [];

for (var i = 0; i < 10; i++) {
    switch (type[i]) {
        case 1: { num[i] = Number1[i] + Number2[i] }; break;
        case 2: { num[i] = Number1[i] - Number2[i] }; break;
        case 3: { num[i] = Number1[i] * Number2[i] }; break;
        case 4: { num[i] = Number1[i] / Number2[i] }; break;
        case 5: { num[i] = Number1[i] ** Number2[i] }; break;
        case 6: { num[i] = Number1[i] % Number2[i] }; break;
    }
}
console.log(num[0]);
