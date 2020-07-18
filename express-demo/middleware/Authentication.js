function authentication(req,res,next)
{
    console.log("Authetncation ...");

    next();
}

module.exports = authentication;