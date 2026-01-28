const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];


   // 1. filter() employees from IT department
   let res=employees.filter(ele=>ele.department==="IT")
   console.log(res)
    //2. map() to add:
         //   netSalary = salary + 10% bonus
    let res1=employees.map((ele)=>{
        let netSalary;
        sal=ele.salary*0.1
        netSalary=sal+ele.salary
        return {
            ele,
            netSalary:netSalary
        }


    })
    console.log(res1)


  // 3. reduce() to calculate total salary payout
  let res4=employees.reduce((acc,ele)=>acc+ele.salary,0)
  console.log(res4)
  //  4. find() employee with salary 30000
  let res2=employees.find(ele=>ele.salary===30000)
  console.log(res2)
  //  5. findIndex() of employee "Neha"
  let res3=employees.findIndex(ele=>ele.name==="Neha")
  console.log(res3)
