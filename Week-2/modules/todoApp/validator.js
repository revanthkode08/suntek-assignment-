  
                      // 1. Validate task title (not empty, min 3 chars)
                      export function validateTitle(title) {
                        if(title!=''&& title.length>=3)
                            return true
                        else
                            return false
                        // Your code here
                      }
                      console.log(validateTitle("AURA FARMING"))
                      
                      // 2. Validate priority (must be: low, medium, high)
                      export function validatePriority(priority) {
                        if(priority=='low' || priority=='medium' || priority=='high')
                            return true
                        else
                            return false
                        // Your code here
                      }
                      console.log(validatePriority("medium"))
                      
                      // 3. Validate due date (must be future date)
                      export function validateDueDate(date) {
                         const today=new Date()
                        const duedate=new Date(date)
                             if(duedate>today)
                                 return true
                             else
                             return false
                       }
 console.log(validateDueDate("2026-04-10"))
