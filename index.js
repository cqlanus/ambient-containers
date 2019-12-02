const express = require('express');
const bodyParser = require('body-parser');
const Cron = require('node-cron');
const { connectDb, WeatherMoment } = require('./db');
const { cron, startCron } = require('./cron');
const moment = require('moment');
const { Op } = require('sequelize');

const PORT = 3001;

const app = express();

app.use(bodyParser.json());


cron.getWeather();

app.get('/', async (req, res, next) => {
    try {
        const query = await WeatherMoment.findAll({ limit: 288 });
        res.json({ query });
    } catch (err) {
        console.log({err});
        next();
    }
});

app.get('/below/:temp', async (req, res) => {
    const { temp } = req.params;
    const query = await WeatherMoment.findAll({
        where: {
            tempf: {
                [Op.lte]: temp,
            }
        }
    });
    res.json({ query });
});

app.get('/date/:date', async (req, res) => {
    const { date } = req.params;
    const momDate = moment(date, "MM-DD-YYYY");
    console.log({date});
    console.log({momDate});
    const query = await WeatherMoment.findAll({
        where: {
            date: {
                [Op.gte]: momDate.toDate(),
                [Op.lte]: moment(momDate).endOf('day').toDate()
            }
        }
    });
    res.json({query});
});

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));

