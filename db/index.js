const mongoose = require('mongoose');
const url = 'mongodb://mongo:27017/weather';

const connectDb = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};


const weatherMoment = mongoose.Schema({
    dateutc: Number,
    tempinf: Number,
    humidityin: Number,
    baromrelin: Number,
    baromabsin: Number,
    tempf: Number,
    battout: Number,
    humidity: Number,
    winddir: Number,
    windspeedmph: Number,
    windgustmph: Number,
    maxdailygust: Number,
    hourlyrainin: Number,
    eventrainin: Number,
    dailyrainin: Number,
    weeklyrainin: Number,
    monthlyrainin: Number,
    totalrainin: Number,
    solarradiation: Number,
    uv: Number,
    feelsLike: Number,
    dewPoint: Number,
    feelsLikein: Number,
    dewPointin: Number,
    lastRain: Date,
    date: Date,
});

const WeatherMoment = mongoose.model('WeatherMoment', weatherMoment);

module.exports = {
    connectDb,
    WeatherMoment,
}
