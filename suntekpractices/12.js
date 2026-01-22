 let skills=['html','css','js']
 //accessing elements(destructing)
 let[skill1,skill2,skill3]=skills;
 console.log(skill2)
 //inserting
 //at start
 //at end
 skills.unshift('reactjs');
 console.log(skills);
 //at end
 skills.push('angular');
 console.log(skills)
 //in middle
 skills.splice(2,0,'nodejs')
 console.log(skills)
//delete
//at start
skills.shift()
console.log(skills)
//at end
skills.pop()
console.log(skills)
//in between
skills.splice(2,2)
console.log(skills)