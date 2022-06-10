const NewUser = require('../models/registration.model');
var userEmail;
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.User_create = function (req, res,next) {
    let newUser = new NewUser(
        {
            firstname: req.body.firstname,
            email: req.body.email,
            country: req.body.country,
            lastname: req.body.lastname,
            age: req.body.age,
            gender: req.body.gender,
            password: req.body.password

        }
    );
    userEmail = req.body.email;
    newUser.save(function (err) {
        if (err) {
            return next(err);
        }
        return res.send({res: "Posted successfully"})
    })

   
    
};

exports.Fetch_user = function (req, res) {
    NewUser.find({email:req.query.email,password:req.query.password}, function (err, NewUser) {
        if (err) return next(err);
        res.send(NewUser);
    },
    )
};

// exports.update_user = function (req, res,next) {
//     NewUser.findByIdAndUpdate(req.params.email, {$set : req.body}, function (err, NewUser) {
//         if (err) return next(err);
//         res.send('Product udpated.');
//     });
// };


exports.update_user = function (req, res,next) {
NewUser.updateOne({ email: req.query.email}, {$set: req.body}, {multi: true}, function(err, user) {
    // console.log(`user: ${userEmail} req.body:  ${JSON.stringify(req.body)} );

    if (err) {
        return res.json({success: false, msg: 'Cannot Update User'});
    }       
    if (!user) {
        return res.status(404).json({success: false, msg: 'User not found'});
    }  
    else { 
        res.json({success: true, msg: 'User has been updated'}) 
    };
});
};
// exports.product_details = function (req, res) {
//     Product.find({}, function (err, product) {
//         if (err) return next(err);
//         res.send(product);
//     })
// };