function dif(a)
{
    return function(b)
    {
        return `diff is ${a - b}`
    }
}
diff(5)(6)
