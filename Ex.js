//08/05/23
function pen(colour,cost){
    this.pcolor=colour
this.pcost=cost
this.showInfo=function()
{console.log(this.pcolor,this.pcost)
}

}
let obj=new pen("red",200)
console.log(obj)
obj.showInfo()
let arr=[]
arr.push(new pen("blue",20))
arr.push(new pen("black",50))
arr.push(new pen("red",90))
console.log(arr)

for(let i=0;i<arr.length;i++){
    console.log(arr[i]["pcolor"],arr[i]["pcost"])
}
