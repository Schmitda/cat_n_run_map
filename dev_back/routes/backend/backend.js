/****** REQUIRES ******/



/***** SETTING UP MULTER ******/


/***** DELETE CACHE (Only ANGULAR) *****/
//MIDDLEWARE
function nocache(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '0');
    res.header('Pragma', 'no-cache');
    next();
}

setRoles = function (req, username) {
    var ad = new ActiveDirectory(config.getAdConfig());
    array = [];
    deferred = Q.defer();
    config.groups.forEach(function (group, i) {
        ad.isUserMemberOf(username + "", group.name, function (err, isMember) {
            if (err) {
                console.log('ERROR: ' + JSON.stringify(err));
            }
            if (isMember) {
                name = group.meaning;
                req.session.user[name] = true;
            }

            console.log(isMember);

            if (i == config.groups.length - 1) {
                deferred.resolve(array);
                console.log("next");
            }
        });
    });

    return deferred.promise;
};


sendErrorMessage = function (res, message, duration) {
    res.status(400);
    res.json({
        message: message,
        class: "error",
        duration: duration || 2000
    })
};

sendSuccessMessage = function (res, message, duration) {
    res.status(200);
    res.json({
        message: message,
        class: "success",
        duration: duration || 2000
    })
};

sendWarnMessage = function (res, message, duration) {
    res.status(200);
    res.json({
        message: message,
        class: "warn",
        duration: duration || 2000
    })
};

module.exports = function (app, router) {
    app.use('/api', router);
    /***** DEFAULT FUNCTIONS *****/
    router.get('/currentUser', function (req, res) {
        if (req.session.SID !== undefined) {
            res.json(req.session.user);
            /*    User.findById(req.session.user._id).exec(function(err, user){
             req.session.user = user;
             res.json(req.session.user);
             });*/
        }else{
            res.status(401).send();
        }
    });


    /************** DIFFERENT **************/



};