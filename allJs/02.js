
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.eat = function () {
        console.log(this.name + "吃西瓜");
    }

    this.work = function () {
        console.log(this.name + "在工作");
    }
}

var person1 = new Person("李四", 18);
console.log("姓名:" + person1.name);
console.log("年龄:" + person1.age);
person1.eat();
person1.work();