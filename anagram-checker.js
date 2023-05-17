module.exports = function(string1, string2) {
    // write your code here
    let answer
    let String1_ = string1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let String_slitted = String1_.split('')
    let Sorted_String1 = String_slitted.sort()
    let String_2 = string2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let Slitted_String2 = String_2.split('')
    let Sorted_String2 = Slitted_String2.sort()


    if (Sorted_String1.length !== Sorted_String2.length) {
        answer = false
    }

    for (let i = 0; i < Sorted_String1.length; i++) {
        if (Sorted_String1[i] !== Sorted_String2[i]) {
            answer = false
        } else {
            answer = true
        }
    }

    return answer

}