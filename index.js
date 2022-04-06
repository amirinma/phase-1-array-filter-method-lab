// Code your solution here
function findMatching(array, string){
      const matchingFound = array.filter(function(element){
          return element.toUpperCase() === string.toUpperCase()
      }  )
      return matchingFound
}
function fuzzyMatch(array, string){
    return array.filter(element =>
        element.indexOf(string) !== -1 && element.charAt(0) === string.charAt(0)
    )
}                            

function matchName(drivers, string){
    return drivers.filter(element => element['name'] === string)
}

