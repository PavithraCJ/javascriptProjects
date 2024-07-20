function outerFunc()
{
    let outervar=10
    function innerfunc()
    {
        let innervar=20
        console.log("OuterVariable "+outervar)
        console.log("InnerVariable "+innervar)
    }
    innerfunc()
}
outerFunc()