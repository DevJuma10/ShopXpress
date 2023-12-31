// Not Found

const notFound = (req, res, next) => {
    const error = new Error (`Not Found : ${req.originalUrl}`);
    res.status(404)
    next(error)
}

const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode == 2000 ? 500 : res.statusCode
    res.json({
        message: err?.message,
        stack:err?.stack,
    })

}


module.exports = { errorHandler, notFound }