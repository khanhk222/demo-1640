const QAcoordinator = require('../models/QAcoordinator');
const Account = require('../models/user');
const bcrypt = require('bcryptjs');

exports.handleLogin = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // console.log(bcrypt
    //     .hash('123456789', 10)
    //     .then(hash => {
    //       console.log('Hash ', hash)
    //     })
    //     .catch(err => console.error(err.message)));

    // console.log(username)
    try {
        let user = await Account.findOne({ email: username });
        // console.log(user)
        await bcrypt.compare(password, user.password).then(async (doMatch) => {
            if (doMatch) {
                // console.log(user)
                if (user.role == 'admin') {
                    req.session.user = user;
                    req.session.email = username;
                    req.session.admin = true;
                    res.redirect('/admin');
                }else if(user.role == 'Student'){
                    req.session.user = user;
                    req.session.email = username;
                    req.session.student = true;
                    res.redirect('/student');
                }else if(user.role == 'QAmanager'){
                    req.session.user = user;
                    req.session.email = username;
                    req.session.qam = true;
                    res.redirect('/qam_index');
                }else{
                    req.session.user = user;
                    req.session.email = username;
                    req.session.QAcoordinator = true;
                    res.redirect('/qac');
                }
            } else {
                return res.render('index', { errors: 'Username or password is incorrect' })
            }
        })
    } catch (error) {
        console.log(error);
        return res.render('index' , { errors: 'Username or password is incorrect' });
    }
};

exports.handleLogout = async (req, res) => {
    req.session.destroy();
    res.redirect('/');
}