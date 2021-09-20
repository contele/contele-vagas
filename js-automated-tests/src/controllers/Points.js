const express = require('express')
const router = express.Router()
const {
    getAsync,
    setAsync,
    getKeysAsync
} = require("../helpers/redis/");

router.post('/points/:id', async (req, res, next) => {
    let ret = true;
    try {
        const { id } = req.params;
        const data = req.body;
        await setAsync(`points:${id}`, JSON.stringify(data));
    } catch(e) {
        ret = false;
    }
    res.status(201).json({
        status: ret
    })  
})

router.get('/points/:id', async (req, res, next) => {
    let ret = false;
    try {
        const { id } = req.params;
        let data = await getAsync(`points:${id}`);
        ret = JSON.parse(data);
    } catch(e) {}
    res.status(200).json({
        points: ret
    })  
})

router.get('/points', async (req, res, next) => {
    let ret = false;
    try {
        let data = await getKeysAsync('points:*');
        ret = data.map(v => v.split(':')[1]);
    } catch(e) {}
    res.status(200).json({
        keys: ret
    })  
})

module.exports = router;