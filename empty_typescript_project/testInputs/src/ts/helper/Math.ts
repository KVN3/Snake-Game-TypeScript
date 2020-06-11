export class Math
{
    // Linear interpolation between start (x | y) and end (x | y)
    static lerp (start: number, end: number, amt: number)
    {
        return (1-amt)*start+amt*end
    }
}