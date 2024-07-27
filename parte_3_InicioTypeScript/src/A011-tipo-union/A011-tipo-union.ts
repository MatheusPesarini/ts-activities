﻿function addOrConcat (a: number | string, b: number | string): string | number {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`;
}

console.log(addOrConcat(1, 2));
console.log(addOrConcat('a', 'b'));