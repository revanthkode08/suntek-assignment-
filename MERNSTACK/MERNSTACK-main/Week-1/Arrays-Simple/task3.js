const marks = [78, 92, 35, 88, 40, 67];
   // 1. filter() marks ≥ 40 (pass marks)
   let result=marks.filter(ele=>ele>=40)
   console.log(result)
   // 2. map() to add 5 grace marks to each student
   let result1=marks.map(ele=>ele+=5)
   console.log(result1)
    //3. reduce() to find highest mark
    let result2=marks.reduce((max,ele)=>{
      return ele>max ? ele:max
    })
    console.log(result2)
   // 4. find() first mark below 40
   let result3=marks.find(ele=>ele<40)
   console.log(result3)
   // 5. findIndex() of mark 92
   let result4=marks.findIndex(ele=>ele==92)
   console.log(result4)