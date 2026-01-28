const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];



//    1. filter() only "Sci-Fi" movies
let res=movies.filter(ele=>ele.genre==="Sci-Fi")
console.log(res)
  //  2. map() to return:
    //        "Inception (8.8)"
    let re=movies.map(ele=>
        ele.title +'('+ele.rating+')'
    )
    console.log(re)

    // reduce() to find average movie rating
    let res1=movies.reduce((acc,ele)=>acc+ele.rating,0)/movies.length
    console.log(res1)
    //4. find() movie "Joker"
    let res3=movies.find(ele=>ele.title==="Joker")
    console.log(res3)
    //5. findIndex() of "Avengers"
    let res4=movies.findIndex(ele=>ele.title==="Avengers")
    console.log(res4)
