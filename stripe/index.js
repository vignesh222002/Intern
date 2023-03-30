let people = [1,2,2,1,3]
let limit = 3
let peoplePerBoat = 3

function validGroup(people, limit, peoplePerBoat) {
    let result = []

    people.sort(function (a, b) {return a - b})
    for (let i = 0; i < people.length; i++) {
        if (people[i] == 0) {continue}
        let arr = []
        let weigth = 0;
        let count = 0;
        weigth += people[i]
        arr.push(people[i])
        people[i] = 0;
        count++
        while (count < peoplePerBoat && weigth < limit) {
            for(let j = people.length; j > 0; j--) {
                if (people[j] == 0) {continue}
                if (weigth + people[j] <= limit) {
                    weigth += people[j]
                    arr.push(people[j])
                    people[j] = 0;
                    count++
                }
                else { continue }
            }
        }
        // console.log(arr);
        result.push(arr)
    }
    console.log(result);
}

validGroup(people, limit, peoplePerBoat);