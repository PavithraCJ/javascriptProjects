var obj1={
    'a':5
}
var obj2={
    'a':8
}
function foo()
{
    this.a=42
}
var baz=foo.bind(obj2)
baz();
console.log(obj1.a)
console.log(obj2.a)
console.log(baz.a)