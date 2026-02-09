import {users} from './data.js'


//  -> Get only active users
export const getActiveUsers=(users)=>{
    let activeUsers=[]

for (const v of users){
    if (v.active){
        activeUsers.push(v);
    }
}
return activeUsers;
}
console.log(getActiveUsers(users))
//   -> Extract names of active users
export const getActiveUsersNames=(users)=>{
    let activeUsersNames=[]

for (const v of users){
    if (v.active){
        activeUsersNames.push(v.name);
    }
}
return activeUsersNames;
}
console.log(getActiveUsersNames(users))
//   -> Check if any admin exists
export const adminExists=(users)=>{
    for (const v of users){
        if (v.role=='admin'){
            return true
        }
    }
    return false
}
console.log(adminExists(users))
//   -> Find user by id
export const findUserById=(users,id)=>{
for (const v of users){
    if (v.id==id){
        return v
    }

}
return false
}
console.log(findUserById(users,1))
//   -> Deactivate a user immutably
let newUsers=users.map(e=>{
    return{
        ...e,
        active:false
    }
})
console.log(newUsers)