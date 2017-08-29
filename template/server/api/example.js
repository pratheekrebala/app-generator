import { Router } from 'express';

const router = Router();

// Mock example
const example = [
    { name: 'example 1' },
    { name: 'example 2' },
    { name: 'example 3' }
];

/* GET example listing. */
router.get('/example', function(req, res, next) {
    res.json(example);
});

/* GET example by ID. */
router.get('/examples/:id', function(req, res, next) {
    const id = parseInt(req.params.id);
    
    if (id >= 0 && id < examples.length) {
        res.json(examples[id]);
    } else {
        res.sendStatus(404);
    }
});

export default router;
