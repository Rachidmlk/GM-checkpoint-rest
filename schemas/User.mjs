import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {type: String, unique: true},
    age: {type: Number},
    job: {type: String}
})

const User = mongoose.model('GMusers', userSchema)
export default User