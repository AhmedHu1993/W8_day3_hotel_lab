const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function(collection) {
    
    const router = express.Router();

    // Show
    router.get('/', (req, res) => {
        collection.find().toArray()
            .then((docs) => res.json(docs))
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    status: 500,
                    message: err
                })
            });
    }),

    // Create
    router.post('/', (req, res) => {
        const newData = req.body;
        collection.insertOne(newData)
            .then((doc) => res.json(doc.ops[0]))
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    status: 500,
                    message: err
                })
            })
    });

    // Destroy
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection.deleteOne({ _id: ObjectId(id)})
            .then(() => collection.find().toArray())
            .then((docs) => res.json(docs))
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    status: 500,
                    message: err
                })
            })
    });

    return router;
};

module.exports = createRouter;