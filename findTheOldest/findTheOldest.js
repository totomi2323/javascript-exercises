let findTheOldest = function(people) {
 /*
const oldest = people.sort((a,b) => {
    const lastGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    return lastGuy > nextGuy ? -1 : 1;
})
return oldest[0];
*/

    
return people.reduce((oldest,recentPerson) => {
oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
currentAge = getAge(recentPerson.yearOfBirth, recentPerson.yearOfDeath)
return oldestAge < currentAge ? recentPerson : oldest
})

function getAge(birth,death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death-birth;
}

}
module.exports = findTheOldest
