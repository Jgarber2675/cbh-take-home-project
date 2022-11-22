# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
While making changes I find it difficult to read extremely nested conditional statements, and parsing through it seems that some of the conditional logic can be fit on a single line to add clarity. The termianl operator helps clarify that the block of code that was the if else statement really just sets canidate equal to the partition key if it is defined, or a newly created key if not. Pulling it out of the if (event) line also allows the function of that conditional to be more clear as logic that captures the edge case of an undefined input. I also assign canidate to be equal to the value of the trivial parition key when its declared, which removes the need to determine if canidate is defined.

CHANGES:
1) candidate is automatically assigned the value of TRIVIAL_PARITION_KEY, this allows us to remove condiitonal logic on lines 18 & 22 which check to see if has been assigned a value before
2) conditional logic checking if passed in argument is defined has been rearranged to cover the edge case before checking other conditional logic. This allows for the utility of the conditional to be understood quicker
3) Logic determining canidate reduced to one line for readability using terminal operator. This also removed the need for the variable "data"



