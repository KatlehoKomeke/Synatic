// The 'checkNesting' identifies parentheses pairs
// for example {} () []
// if the given array conatins a pair of parentheses
// the function will return true. 

// The 'checkNesting' accepts an array.
function checkNesting(theArray)
{
    // Looping through each element in the array.
    theArray.forEach(function(element, index)
    {
        const i = index;
        // Checking if the next neighbouring element in the array is a 
        // closing bracket, closing brace or closing square bracket.
        if((element + 1) === theArray[i+1])
        {
            return true;
        }
    });

    // default return
    return false;
}

function ParensAreBalanced(theString)
{
    // Looking for specfic parentheses.
    if(theString.includes("(") || theString.includes(")") || theString.includes("{") || theString.includes("}") || theString.includes("[") || theString.includes("]"))
    {
        // Initialising variables
        let arrayOfOrder  = [];
        let countForOpen = 0;
        let countForClosed = 0;
        let countForCurly = 0;
        let countForCurlyClose = 0;
        let countForSquare = 0;
        let countForSquareClose = 0;

        // Counting the number of occurences of parentheses
        // and pushing its integer representation into arrayOfOrder.
        for(let i=0;i<theString.length;i++)
        {
            if(theString[i] === "(")
            {
                countForOpen++;
                arrayOfOrder.push(1);
            }
            if(theString[i] === ")")
            {
                countForClosed++;
                arrayOfOrder.push(2);
            }
            if(theString[i] === "{")
            {
                countForCurly++;
                arrayOfOrder.push(3);
            }
            if(theString[i] === "}")
            {
                countForCurlyClose++;
                arrayOfOrder.push(4);
            }
            if(theString[i] === "[")
            {
                countForSquare++;
                arrayOfOrder.push(5);
            }
            if(theString[i] === "]")
            {
                countForSquareClose++;
                arrayOfOrder.push(6);
            }
        }

        // Ensuring that the parentheses counts are matching.
        if((countForOpen === countForClosed) && (countForCurly === countForCurlyClose) && (countForSquare === countForSquareClose))
        {
            do 
            {
                // Lopping through the array and removing paired parentheses.
                arrayOfOrder.forEach(function(element, index, array)
                {
                    const i = index;
                    if((arrayOfOrder[i] + 1) === arrayOfOrder[i+1])
                    {
                        arrayOfOrder.splice(i, 2);
                    }
                });
            } while (checkNesting(arrayOfOrder));
            
            // Initialising variables.
            let arrayFirstHalf = [];
            let arraySecondHalf = [];

            // Splitting the arrayOfOrder into two.
            for(let i=0;i<arrayOfOrder.length/2;i++)
            {
                arrayFirstHalf.push(arrayOfOrder[i]);
            }
            for(let i= arrayOfOrder.length/2;i<arrayOfOrder.length;i++)
            {
                arraySecondHalf.push(arrayOfOrder[i]);
            }
            // Rearranging arraySecondHalf.
            arraySecondHalf.reverse();
            for(let i = 0; i < arrayOfOrder.length/2;i++)
            {
                const index = i;
                // Compairing arrayFirstHalf with arraySecondHalf
                // and assessing the symetry of arrayOfOrder.
                if(((arrayFirstHalf[index]+1) !== arraySecondHalf[index]))
                {
                    return false;
                }
            }
            return true;
        }else
        {
            return false;
        }
    }else
    {
        // Default response if there aren't any parenthesis.
        return true;
    }
}

// Test data for verification.
console.log(ParensAreBalanced("()")  );
console.log(ParensAreBalanced("[]") );
console.log(ParensAreBalanced("(") );
console.log(ParensAreBalanced("]") );
console.log(ParensAreBalanced("}") );
console.log(ParensAreBalanced("((()))") );
console.log(ParensAreBalanced("((())") );
console.log(ParensAreBalanced("][[[[[[") );
console.log(ParensAreBalanced("{([])}") );
console.log(ParensAreBalanced("{([]}") );
console.log(ParensAreBalanced("") );
console.log(ParensAreBalanced("hello world") );
console.log(ParensAreBalanced("function () { console.log([\"cat\", \"dog\"]) }") );
console.log(ParensAreBalanced("function ( { console.log([\"cat\", \"dog\"]) }") );
console.log(ParensAreBalanced("([)]") );