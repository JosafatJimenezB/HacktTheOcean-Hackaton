const express = require('express');
const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get("/", (req, res)=>{
  res.json({message : 'Index'})
});

app.get('/biologo', async (req, res) => {
    const biologos = await prisma.biologo.findMany({});
    res.json(biologos)
})

app.get('/biologo/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const biologo = await prisma.biologo.findUnique({where: {id: parseInt(id)}});
    res.json(biologo)
})

app.post('/biologo', async (req, res)=>{
    const message = "Biologo creado."
    let code = 200
    const biologo ={
        nombre : req.body.nombre,
        organizacion : req.body.organizacion,
        especialidad  : req.body.especialidad,
        pais : req.body.pais,
    }
    await prisma.biologo.create({data:biologo});
    return res.json({code:code, msg: message})
})

app.put("/biologo/:id", async (req, res) => {
    let message = "Biologo actualizado."
    let code = 200
    const id = parseInt(req.params.id);
    await prisma.biologo.update({
        where: {id:id},
        data: {
            nombre : req.body.nombre,
            organizacion : req.body.organizacion,
            especialidad  : req.body.especialidad,
            pais : req.body.pais,
        }
    })
    return res.json({code:code, msg: message})
})

app.delete('/biologo/:id', async (req, res)=>{
    let message = "Biologo eliminado."
    let code = 200
    const id = parseInt(req.params.id);
    await prisma.biologo.delete({where: {id:id}});
    return res.json({code:code, msg: message})
})

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});

