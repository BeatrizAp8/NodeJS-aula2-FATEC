const express = require ("express")
const app = express()

app.listen(8081, function(){
    console.log("Servidor ativo!")
})

//rota em Node JS
app.get("/", function(req,res){
    res.end("Seja bem vindo ao Node JS")
})
 
//parametro
app.get("/cadastrar/:item", function(req,res){
    res.end(req.params.item)
})

//rota
app.get("/contato", function(req,res){
    res.send("Página de Contato")
})

//mais parametros
app.get("/produtos/:item/:quantidade", function(req,res){
    res.send("Item: " + req.params.item + "<br>Quantidade: " +req.params.quantidade)
})

//testando nodemon
app.get("/listar", function(req,res){
    res.send("Página de Listagem")
})


