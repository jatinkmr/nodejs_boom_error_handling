const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use('/', require('./Routes'))

// error handler
app.use(function (err, req, res, next) {
    return res.status(500).send({
        error: true,
        message: err
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port`)
})