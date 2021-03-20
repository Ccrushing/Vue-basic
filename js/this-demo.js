//关于对象中的this指针
//this指向对象本身，通过this可以引用对象的属性和函数
// class Player{
//     //构造函数
//     constructor(name, age){
//     this.name = name
//     this.age = age
//     }

    //定义成员函数
//     printInfo () {
//         console.log(this.name + ' ' + this.age)
//     }
// }

// let palyer1 = new Player('tom',20)
// palyer1.printInfo()

//this指针在使用中的一个问题
class Player{
    //构造函数
    constructor(name, age){
    this.name = name
    this.age = age
    }

    //定义成员函数
    printInfo () {
      setTimeout(() => {
        console.log(this.name + ' ' + this.age)
      }, 1000);
    }
}

let paly2 = new Player('tom',20)
paly2.printInfo()
