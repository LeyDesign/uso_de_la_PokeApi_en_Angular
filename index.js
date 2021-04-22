const app = require('express')();
const PORT = process.env.PORT || 3000;



const cors = require('cors');

app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
})

require("./routes/pokemon.routes")(app);
app.listen(PORT, () => {
    console.log(`Backend Running on PORT: ${PORT}`)
});