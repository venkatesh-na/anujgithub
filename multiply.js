function Multiply(a)
{
    return function(b)
    {
        return `product is ${a * b}`
    }
}
Multiply(5)(6)
