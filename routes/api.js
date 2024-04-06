var express = require('express');
var routers = express.Router();

const Distributors = require('../models/distributors');

module.exports =  routers;

routers.get('/get-list-distributor', async (req,res) => {
    try{
        const data = await Distributors.find().sort({createdAt: -1});
        if(data){
            res.json({
                "status": 200,
                "messenger": "Thành Công",
                "data": data,
            })
        }else
        {
            res.json({
                "status": 400,
                "messenger": "Thất Bại",
                "data": [],
            });
        }
    }catch(e){
        console.log(error);
    }
})

routers.post("/add-distributor", async (req, res) => {
    try {
      const data = req.body;
      const newDistributor = new Distributor({
        name: data.name,
      });
      const result = await newDistributor.save();
      if (result) {
        res.json({
          "status": 200,
          "messenger": "thêm Thành Công",
          "data": result,
        });
      } else {
        res.json({
          "status": 400,
          "messenger": "thêm Thất Bại",
          "data": [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  });

  routers.get('/search-distributor', async (req,res) => {
    try{
        const key = req.query.key;
        const data = await Distributors.find({name: {"$regex": key,"$options" : "i"}}).sort({createdAt: -1});
        if(data){
            res.json({
                "status": 200,
                "messenger": "Thành Công",
                "data": data,
            })
        }else
        {
            res.json({
                "status": 400,
                "messenger": "Thất Bại",
                "data": [],
            });
        }
    }catch(e){
        console.log(error);
    }
})

routers.delete('/delete-distributor-by-id/:id', async (req,res) => {
    try{
        const id = req.params;
        const data = await Distributors.findByIdAndDelete(id);
        if(data){
            res.json({
                "status": 200,
                "messenger": "Thành Công",
                "data": data,
            })
        }else
        {
            res.json({
                "status": 400,
                "messenger": "Thất Bại",
                "data": [],
            });
        }
    }catch(e){
        console.log(error);
    }
})

routers.put('/update-distributor-by-id/:id', async (req,res) => {
    try{
        const id = req.params;
        const dataupdate = req.body;
        const data = await Distributors.findByIdAndUpdate(id,{name: dataupdate.name});
        if(data){
            res.json({
                "status": 200,
                "messenger": "Thành Công",
                "data": data,
            })
        }else
        {
            res.json({
                "status": 400,
                "messenger": "Thất Bại",
                "data": [],
            });
        }
    }catch(e){
        console.log(error);
    }
})