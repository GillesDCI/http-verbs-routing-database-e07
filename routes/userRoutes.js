import express from 'express';
import users from './../userdata.js';

const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json(users);
})
//:name = request parameter: (we can add anything in there)
router.get('/find/:name',(req, res) =>{
    const { name } = req.params;
    //find the user with this name
    const user = users.find(item => item.first_name.toLowerCase() === name.toLowerCase())

    if(!user){
        //send status code 404 not found 
        return res.status(404).json({message:'No user with that name'});
    }

    return res.status(200).json(user);

});

router.get('/find/byid/:id',(req, res) =>{
    const user = users.find(item => item.id === +req.params.id)

    if(!user){
        //send status code 404 not found 
        return res.status(404).json({message:'No user with that id found.'});
    }

    return res.status(200).json(user);
})

//http://localhost:3001/api/users/find?email=dalgeo8@wix.com&id=10&firstname=beth
router.get('/find',(req, res) =>{
  //show the full query object
  console.log("the query object is", req.query)
  //show the specific id of the query 
  console.log("the id sent to me is", req.query.id)

  const {email, id, firstname} = req.query; //query parameter object

  //const user = users.find(item => item.email === email)
  const listUsers = users.filter(item => item.email === email || item.id === +id || item.first_name.toLowerCase().includes(firstname.toLowerCase()))


  if(!listUsers){
      //send status code 404 not found 
      return res.status(404).json({message:'No user with that id found.'});
  }

  return res.status(200).json(listUsers);
})



export default router;