let obj={personName:"x", personAge:18}

console.log(obj)

console.log(obj["personAge"])

let arr=[]

arr.push({personName:"y", personAge:20})

arr.push({personName:"z", personAge:22})

arr.push({personName:"a", personAge:17})

arr.push({personName:"b", personAge:16})

console.log(arr)

console.log(arr[1]["personAge"])

totalage=0

arr.forEach((b)=>{totalage=totalage+b.personAge})

console.log(totalage)
