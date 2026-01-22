/*marks are stored subject -wise for a student.
test data:
const marks={
maths:78,
physics:65,
chemistry:83,
english:55
};
tasks:
1.calculate total marks
2.calculate average marks
3. find the highest scoring subject
4.add a new subject computer:90
*/
const marks={
maths:78,
physics:65,
chemistry:83,
english:55
};
totalmarks=0
for (let mark in marks){
    totalmarks+=mark
}
console.log(totalmarks)
for (let mark in marks){
    totalmarks+=mark
}
avg=totalmarks/4
console.log(avg)
marks.computer=90
console.log(marks)