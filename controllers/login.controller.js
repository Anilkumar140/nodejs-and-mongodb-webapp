const Product = require('../models/login.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.Login_create = function (req, res,next) {
    let ExistUser = new ExistUser(
        {
           
            email: req.body.email,
            password: req.body.password

        }
    );

    ExistUser.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Login Created successfully')
    })

    ExistUser.find(function (err) {
        if (err) {
            return next(err);
        }
        return res.send({res: "User data fetched successfully"})
    })



    // try {
    //     const get_user_Login_List = await login_collection.find({});
        
    //     res.send(get_user_Login_List);
      
    //   } catch (e) {
    //     res.status(400).send(e);
    //   }


};