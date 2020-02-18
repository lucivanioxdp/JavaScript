var a = ['ana','jose','marcos']
a.push('caca')
a.sort()
/*for(i=0;i<a.length;i++){
    console.log(a[i])
}*/

for(i in a){
    console.log(a[i])
}

console.log(a.indexOf('jose'))
console.log(`${a}`)