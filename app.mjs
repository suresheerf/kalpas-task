import express from 'express'
import fs from 'fs'
import multer from 'multer'
import csv from 'fast-csv'
import { User } from './user.model.mjs'

import { userRouter } from './user.router.mjs'
import { sendJwt , protect } from './authController.mjs'

export const app = express();


const multerFilter = (req,file,cb)=>{
    if(file.mimetype.includes('csv')){
        cb(null , true);
    }
    else{
         cb('not a csv file.please upload csv file',false);
    }
}

const upload = multer({ dest:'upload/',fileFilter:multerFilter });

//middlewares

app.use(express.json());



//routes
app.get('/api/auth',sendJwt);
app.post('/api/csv',protect,upload.single('users'),async (req,res)=>{
    csv.parseFile(req.file.path,{headers:true})
      .on('data',async row => {

        const user = await User.create(row);
    })
      .on('end',rowCount => {
            console.log(`Parsed ${rowCount} rows`)
            res.status(200).json({
                status:'success',
            }
            )
        });
    await fs.rm(req.file.path,()=>{
        console.log('removed csv file');
    });
})
app.use('/api/users/',userRouter);