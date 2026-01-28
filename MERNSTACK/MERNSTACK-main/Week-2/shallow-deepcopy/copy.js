// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
            //  let userCopy=structuredClone(user)
           //   console.log(user)
             // console.log(userCopy)

// 🎯 Task
//     1. Create a shallow copy of user
let userCopyShallow={...user}

//     2. Change:
//           i. name in the copied object
userCopyShallow.name="KRISH"
//           ii. preferences.theme in the copied object
userCopyShallow.preferences.theme="light"
//           iii .Log both original and copied objects
console.log(user)
console.log(userCopyShallow)
//           iv. Observe what changes and what doesn’t
