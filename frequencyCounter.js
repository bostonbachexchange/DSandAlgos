function sameFrequency(numOne, numTwo){
    let frequencyCounter = {}
    let arrOne = numOne.toString().split('')
    let arrTwo = numTwo.toString().split('')
    if(arrOne.length != arrTwo.length){ return false}
    console.log(arrOne, arrTwo)

    for(let char in arrTwo){
        frequencyCounter[char]  = (frequencyCounter[char] || 0) + 1

        console.log(arrTwo[char], ": ", frequencyCounter[char])
        console.log(arrOne.indexOf(arrTwo[char]))

        if(arrOne.indexOf(arrTwo[char]) < 0){
            return false
        } else {
            arrOne.splice(arrOne.indexOf(arrTwo[char]), 1)
            console.log('arrOne', arrOne)
        }
    }
    console.log('counter: ', {frequencyCounter})
    console.log('arrOne', arrOne)
    return true
  }
  
//   console.log(sameFrequency(182,281))
//   console.log(sameFrequency(34,14))
  console.log(sameFrequency(3589578, 5879385))