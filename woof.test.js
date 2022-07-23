//Testing Files Format is either [name.test.js] or [name.spec.js]
const woof=require('./woof')
test("Test Name here",()=>{//test.only runs this only test and skips rest all tests
    const result=woof("oh herro");
    //Expect Statements:
    expect(result).toBe("oh herrowoof!")
    expect(result).not.toBe("Honk")
    expect(result).toEqual("oh herrowoof!")//To equal is generally used for comparing objects specially
    expect({a:"one",b:"two"}).toEqual({a:"one",b:"two"});
    expect(result).toMatch(/oh herrowoof!/i)// [\d] is used inside [//i] to indicate if there is a number present at the point where we put [\d]  
    expect(["a","b","c"]).toContain("b");//To contain method is used for Arrays
    expect(result).not.toBeNull();
});//Basic Format of using [test] keyword or function.

//If we use [npx jest --silent] it does not run the console logs the test is recieving.


//Test Control Utility Methods:
test.todo("Should not allow")//todo makes a note or comment in the test console
test.skip("Skip method skips the test",()=>{})


test("Prints the result of the function and saves it",()=>{
    const result=woof("oh herro")
    expect(result).toMatchSnapshot()
})