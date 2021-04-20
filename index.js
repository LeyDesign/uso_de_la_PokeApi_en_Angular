const app = require('express')();
const PORT = process.env.PORT || 3000;



app.get("/", (req, res) => {
    res.status(200).send("HOLA")
});



app.listen(PORT, () => {
    console.log(`Backend Running on PORT: ${PORT}`)
});