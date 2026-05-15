class Book{
    title;
    author;
    pages;
    isAvailable=true
    borrow(isAvailable){
        this.isAvailable=isAvailable
        console.log(isAvailable)

    }
    returnBook(){

    }
    getInfo(){
        
        console.log(this.title,this.author,this.pages,this.isAvailable)

    }
    isLoginBook(){

    }
}
let b1=new Book()
b1.author="jack"
b1.title="Harry potter"
b1.pages=1430
let b2=new Book()
b2.author="bruce"
b2.title="one piece"
b2.pages=14302
let b3=new Book()
b3.author="jack"
b3.title="Harry potter"
b3.pages=1430
let b4=new Book()
b4.author="james"
b4.title="mummy"
b4.pages=1430
b2.getInfo()
b4.getInfo()
b3.getInfo()
b1.getInfo()
b1.borrow()