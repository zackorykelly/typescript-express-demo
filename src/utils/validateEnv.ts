import {
    cleanEnv, str,
} from 'envalid';

function validateEnv() {
    cleanEnv(process.env, {
        MONGO_PASSWORD: str(),
        MONGO_PATH: str(),
        MONGO_USER: str(),
        PORT: str(),
    });
}

export default validateEnv