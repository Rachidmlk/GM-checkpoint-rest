import express from 'express'
import mongoose from 'mongoose'
import User from '../schemas/User.mjs'

const router = express.Router()

router.get('/', async (req, res)=>{
try{
    const users = await User.find()
    res.send(users)
}
catch(err){

}

})
router.post('/', async (req, res)=>{
    try{
    const {name, age, job} = req.body
    console.log(name);
    
    const user = new User({
        name,
        age,
        job
    })
    await user.save()
    res.status(201).send({message: 'created!'})

    }
    catch(err){
    console.log(err);
    }

})
router.put('/', async (req, res)=>{
    try{
        const {id, name, age, job} = req.body
        console.log(id);
        await User.findByIdAndUpdate(id, {name, age, job})
         const user = await User.findById(id)
         
         console.log(name);
         console.log(age);
         console.log(job);
         
        console.log('Updated');
        res.status(201).send({message: 'updated!', user})
        
        }
        catch(err){
        console.log(err);
        }

})
router.delete('/', async (req, res)=>{
    try{
        const {id} = req.body
        await User.findByIdAndDelete(id)
        console.log('Deleted');
        res.status(200).send({message: 'deleted!'})
        
        }
        catch(err){
        console.log(err);
        }

})

export default router