import {Router} from 'express';
const router = Router();

// db connection
import {connect} from '../database'
import {ObjectID} from 'mongodb'

router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('verificentros').find({}).toArray();
    res.json(result);
});

router.post('/', async (req, res) => {
    const db = await connect();
    const centro = {
        title: req.body.title,
        subtitle: req.body.subtitle,
        img_url: req.body.img_url,
        title_button: req.body.title_button,
        type: req.body.type,
        url: req.body.url,
        webview_height_ratio: req.body.webview_height_ratio
    };
    const result = await db.collection('verificentros').insertOne(centro)
    res.json(result.ops[0])
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('verificentros').findOne({_id: ObjectID(id)})
    res.json(result)
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('verificentros').deleteOne({_id: ObjectID(id)})
    res.json({
        message: `centro ${id} eliminado`,
        result
    })
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const actualizar = {
        title: req.body.title,
        subtitle: req.body.subtitle,
        img_url: req.body.img_url,
        title_button: req.body.title_button,
        type: req.body.type,
        url: req.body.url,
        webview_height_ratio: req.body.webview_height_ratio
    }
    const db = await connect();
    await db.collection('verificentros').updateOne({_id: ObjectID(id)}, {$set: actualizar})
    res.json({
        message: `centro ${id} actualizado`
    })
});

export default router;