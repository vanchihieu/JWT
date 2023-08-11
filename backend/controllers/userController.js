const User = require('../models/User');

const userController = {
    // GET ALL USER
    getAllUsers: async(req, res)=>{
        try {
            const user = await User.find();
            res.status(200).json(user);


        } catch (error) {
            res.status(500).json(error);
        }
    },
    
    //DELETE USER
    deleteUser: async(req,res) =>{
        try {
            // User.findByIdAndDelete
            const user = await User.findById(req.params.id);
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = userController;