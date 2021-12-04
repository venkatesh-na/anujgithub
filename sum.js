function sum(a)
{
    return function(b)
    {
        return `sum is ${a + b}`
    }
}
sum(5)(6)
