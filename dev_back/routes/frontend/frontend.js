module.exports = function(app) {
    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res){
        res.sendfile('./dev_public/app/index.html'); // load our public/index.html file
    });

    app.get('/', function (req, res) {
        res.sendfile('./dev_public/app/index.html'); // load our public/index.html file
    });
}