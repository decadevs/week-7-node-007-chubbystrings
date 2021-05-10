export default {
    square: (side: number): number => {
        return side * side;
    },

    triangle: (a:number, b: number, c: number): number => {
        const s: number = (a + b + c) / 2
        const res: number = Math.sqrt(s*(s-a) * (s-b) * (s-c))
        return Number(res.toFixed(2))
    },

    rectangle: (length: number, breath: number): number => {

        return length * breath
    },

    circle: (radius: number): number => {
        let res = Math.PI * (radius ** 2)
        return Number(res.toFixed(2))
    },

}