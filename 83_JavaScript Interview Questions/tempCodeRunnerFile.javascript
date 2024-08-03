function findSecondHighest(arr) {
    if (arr.length < 2) {
      throw new Error("Array should have at least two numbers.");
    }
  
    let highest = -Infinity;
    let secondHighest = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > highest) {
        secondHighest = highest;
        highest = arr[i];
      } else if (arr[i] > secondHighest && arr[i] < highest) {
        
        secondHighest = arr[i];
      }
      console.log(secondHighest)
    }
  
    if (secondHighest === -Infinity) {
      throw new Error("There is no second highest number.");
    }
  
    return secondHighest;
  }
  
  // Example usage:
  const numbers = [3, 1, 4, 2, 7, 5];
  const secondHighestNumber = findSecondHighest(numbers);
  console.log("The second highest number is:", secondHighestNumber);
  