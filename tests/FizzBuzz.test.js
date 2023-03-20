import {fizzbuzz} from "../src/scripts/FizzBuzz"

describe('FizzBuzz', () => {
    test('should return Fizz', () => {
        //given
        let numb = 3;
        //when
        const result = fizzbuzz(numb);
        //then
        expect(result).toBe("Fizz");
    });
});

describe('FizzBuzz', () => {
    test('should return Fizz', () => {
        //given
        let numb = 5;
        //when
        const result = fizzbuzz(numb);
        //then
        expect(result).toBe("Buzz");
    });
});

describe('FizzBuzz', () => {
    test('should return Fizz', () => {
        //given
        let numb = 15;
        //when
        const result = fizzbuzz(numb);
        //then
        expect(result).toBe("FizzBuzz");
    });
});