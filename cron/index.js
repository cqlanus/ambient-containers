const Cron = require('node-cron');
const fetch = require('node-fetch');
const { WeatherMoment } = require('../db');

class Crono {

    constructor() {
        console.log('running cron class');

        this.BASE = 'https://api.ambientweather.net/v1';
        this.DEVICE_ID = process.env.DEVICE_ID;
        this.API_KEY = process.env.API_KEY;
        this.APP_KEY = process.env.APP_KEY;
    }

    async getWeather() {
        const url = `${this.BASE}/devices/${this.DEVICE_ID}?apiKey=${this.API_KEY}&applicationKey=${this.APP_KEY}`;
        const response = await fetch(url);
        const results = await response.json();
        console.log('got weather');
        const formatted = results.map(r => ({
            ...r,
            lastRain: new Date(r.lastRain),
            date: new Date(r.date),
        }));
        console.log({ results: formatted[0] });
        if (Array.isArray(formatted)) {
            const mongoResult = await WeatherMoment.bulkCreate(formatted);
            console.log({insertMany: true});
        }
    }
}

const cron = new Crono();

const startCron = () => {
    Cron.schedule('59 23 * * *', () => {
        console.log('running cron job');
        cron.getWeather();
    });
};


module.exports = {
    cron,
    startCron,
};
