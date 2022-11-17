// Code your solution here
function findMatching(drivers, string){
    const result = drivers.filter(driversName => drivers.Name === string)
    return result;
}
function fuzzyMatch(drivers, string){
    const result = drivers.filter(driversName => driversName.startsWith(string))
    return result;
}
function matchName(drivers, string){
    const result = drivers.filter(driversName => driversName.match)
    return result;
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']