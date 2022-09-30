const app = require("./src/app");

app.listen(process.env.PORT || 8080, () => {
    console.log("rodando na porta 8080")
})