const { Sequelize, Model, DataTypes } = require('sequelize');
const url = 'postgres://postgres:postgres@postgres:5432/postgres';

const connectDb = () => new Sequelize(url);

const sequelize = connectDb();

class WeatherMoment extends Model {
};

const initializeTable = () => {
    try {
        WeatherMoment.init({
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
            dateutc: Sequelize.FLOAT,
            tempinf: Sequelize.FLOAT,
            humidityin: Sequelize.FLOAT,
            baromrelin: Sequelize.FLOAT,
            baromabsin: Sequelize.FLOAT,
            tempf: Sequelize.FLOAT,
            battout: Sequelize.FLOAT,
            humidity: Sequelize.FLOAT,
            winddir: Sequelize.FLOAT,
            windspeedmph: Sequelize.FLOAT,
            windgustmph: Sequelize.FLOAT,
            maxdailygust: Sequelize.FLOAT,
            hourlyrainin: Sequelize.FLOAT,
            eventrainin: Sequelize.FLOAT,
            dailyrainin: Sequelize.FLOAT,
            weeklyrainin: Sequelize.FLOAT,
            monthlyrainin: Sequelize.FLOAT,
            totalrainin: Sequelize.FLOAT,
            solarradiation: Sequelize.FLOAT,
            uv: Sequelize.FLOAT,
            feelsLike: Sequelize.FLOAT,
            dewPoint: Sequelize.FLOAT,
            feelsLikein: Sequelize.FLOAT,
            dewPointin: Sequelize.FLOAT,
            lastRain: Sequelize.DATE,
            date: Sequelize.DATE,
        }, {
            sequelize,
            modelName: 'WeatherMoment',
            freezeTableName: true,
        });
    } catch (err) {
        console.log({err});
    }
};

initializeTable();
module.exports = {
    connectDb,
    WeatherMoment,
};
