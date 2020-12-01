import express from 'express';
import * as bodyParser from 'body-parser';
import {connect} from "./db/db";
import {User} from "./db/models/User.model";



connect();

const app = express();

app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/users', async (req,res) => {
    const users = await User.find();
    res.send(users);
});

app.post('/users', async (req,res) => {
    const user = new User();
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.courses = req.body.courses;
    user.schoolYear = req.body.school_year;
    await user.save();
    res.send(user);
});

export {app};