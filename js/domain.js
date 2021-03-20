//  Created by crush on 2021/03/12
//  JS的作用域

if(true) {
    var externalVal = 'externalVal'
}

function domainTest(){
    var funVal = 'funVal'
    console.log(externalVal + '---------' + funVal)
}

domainTest()

if(true) {
    console.log(externalVal)
    console.log(funVal)
}



