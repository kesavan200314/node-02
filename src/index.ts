import express, { Express, Request, Response } from 'express';
// const express = require('express');

const app: Express = express();
app.use(express.json())
const studentinfo = [
    {
        id: 1,
        name: "sinthu",
        address: "kodikamam",
        age: 21
    },

    {
        id: 2,
        name: "kesavan",
        address: "muilithevu",
        age: 21
    },
    {
        id: 1,
        name: "sinthu",
        address: "kodikamam",
        age: 21
    },
    {
        id: 1,
        name: "sinthu",
        address: "kodikamam",
        age: 21
    }
]


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});



app.get('/student/:id', (req: Request, res: Response) => {
    const studentDetail = studentinfo.find((detail) => {
        return detail.id === Number(req.params.id)
    })
    console.log(studentDetail)
    res.send(studentDetail)
})

app.post('/student', (req: Request, res: Response) => {
    studentinfo.push(req.body)
    res.send(req.body)
})

app.put('/student/:id', (req: Request, res: Response) => {
    const studentID = Number(req.params.id)
    const studentDetail = req.body;

    const prevstudIndex = studentinfo.find((detail) => {
        return detail.id === studentID
    })

    const prevStudIndex = studentinfo.findIndex((detail) => {
        return detail.id === studentID
    })

    const newRecord = { ...prevstudIndex, ...studentDetail }
    studentinfo[prevStudIndex] = newRecord;
    res.send(newRecord)
})

app.get('/student', (req: Request, res: Response) => {
    res.send(studentinfo);
})

app.delete('/student/:id', (req: Request, res: Response) => {
   const studentID = Number(req.params.id)
        
   const prevStudIndex = studentinfo.findIndex((detail) => {
         return detail.id === studentID
    })    
    
    const deletedinfo = studentinfo.splice(prevStudIndex, 1); 
    res.send(deletedinfo)
    
    studentinfo.splice(prevStudIndex, 1)
    res.send(studentinfo)
})

    app.listen(3000, () => {
    console.log('Server is running on port 3000');
})