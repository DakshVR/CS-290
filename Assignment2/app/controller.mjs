import * as user from './model.mjs';
import express, { query } from 'express';
const app = express();

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
})


let withparams = 0
let withoutparams = 0
let total = 0
app.use((req, res, next) => {
    if (req.url.includes("retrieve")) {
        if (req.query._id || req.query.name || req.query.age || req.query.email || req.query.phoneNumber) {
            withparams = withparams + 1
        } else {
            withoutparams = withoutparams + 1
        }
        total = withparams + withoutparams
        // console.log(total)
        if (total % 10 === 0) {
            console.log(`Total retrieve requests: ${total}`)
            console.log(`Retrieve requests with 0 query parameters: ${withparams}`)
            console.log(`Retrieve requests with 1 or more query parameters: ${withoutparams}`)
        }
    }
    next();
})

app.get("/create", (req, res) => {
    user.createUser(req.query.name, req.query.age, req.query.email, req.query.phoneNumber)
        .then(user => {
            res.send(user);
        })
        .catch(error => {
            // console.log(error);
            res.send({ error: 'Request Failed' });
        })
});

app.get("/retrieve", (req, res) => {
    const filter = []
    if (req.query.name) {
        filter.push({ name: req.query.name })
    }
    if (req.query.age) {
        filter.push({ age: req.query.age })
    }
    if (req.query.email) {
        filter.push({ email: req.query.email })
    }
    if (req.query.phoneNumber) {
        filter.push({ phoneNumber: req.query.phoneNumber })
    }
    if (req.query._id) {
        filter.push({ _id: req.query._id })
    }

    if (filter.length === 0) {
        filter.push({})
    }
    user.findUser(filter, '', 0)
        .then(user => {
            // console.log(user)
            res.send(user);
        })
        .catch(error => {
            // console.log(error);
            res.send({ error: 'Request Failed' });
        });
});

app.get("/update", (req, res) => {
    // console.log(req.query);
    user.replaceUser(req.query)
        .then(data => {
            let count = 0
            if (data._id) {
                count = 1
            }
            res.send({ modifiedCount: count });
        })
        .catch(error => {
            res.send({ "Error": "Not Found" });
        });
});

app.get("/delete", (req, res) => {
    const params = req.query._id !== undefined
        ? { _id: req.query._id }
        : req.query.name !== undefined
            ? { name: req.query.name }
            : req.query.age !== undefined
                ? { age: req.query.age }
                : req.query.email !== undefined
                    ? { email: req.query.email }
                    : req.query.phoneNumber !== undefined
                        ? { phoneNumber: req.query.phoneNumber }
                        : ''
    user.deleteByParams(params)
        .then(deletedCount => {
            res.send({ deletedCount: deletedCount })
        })
        .catch(error => {
            // console.log(error)
            res.send({ error: 'Request Failed' });
        });
});

