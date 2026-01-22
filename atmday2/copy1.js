 /*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
 */
const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              }; 
              let copyobj={...user}
              copyobj.name="raghu"
              copyobj.preferences.theme="light"
              console.log("user",user)
              console.log("copyUser",copyobj)
              //by using spread operator only top level properties are copied to new object
              //nested object properties are referenced to new object
