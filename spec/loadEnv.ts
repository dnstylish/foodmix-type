// Set the env file, must be first
import dotenv from 'dotenv';

const result2 = dotenv.config({
    path: `./src/environment/env/test.env`,
});

if (result2.error) {
    throw result2.error;
}
