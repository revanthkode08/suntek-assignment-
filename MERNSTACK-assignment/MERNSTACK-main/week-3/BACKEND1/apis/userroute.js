import exp from 'express';
//create min express(seperate route)app
const userApp = exp();
const PORT=3000;
userApp.use(exp.json()); //  parses JSON body

userApp.use(exp.json());



userApp.post('/user',(req,res)=>{
    const newUser = req.body;
    newUser.id = user.length + 1; // assign id
    user.push(newUser);
    res.status(201).json({message:"user created",payload:newUser});
});
userApp.put('/user/:id',(req,res)=>{
    const id = req.params.id;
    const modifiedUser = req.body;
    const userIndex = user.findIndex(userObj => userObj.id == id);
    if (userIndex === -1) {
        res.status(404).json({message:"user not found"});
    } else {
        user.splice(userIndex, 1, modifiedUser);
        res.status(200).json({message:"user modified", payload: modifiedUser});
    }
});
userApp.delete('/user/:id',(req,res)=>{
    const id = req.params.id;
    const userIndex = user.findIndex(userObj => userObj.id == id);
    if (userIndex === -1) {
        res.status(404).json({message:"user not found"});
    } else {
        const deletedUser = user.splice(userIndex, 1);
        res.status(200).json({message:"user deleted", payload: deletedUser[0]});
    }
});
//read user by id
userApp.get('/user/:id',(req,res)=>{
    console.log(req.params);
    let id = req.params.id;
    //params property return an object containing route parameters
    //it will single user id
    let user = user.find(userObj => userObj.id == id);
    //find response
    if (user) {
        res.status(200).json({message:"user found",payload:user});
    } else {
        res.status(404).json({message:"user not found"});
    }
});
export default userApp;