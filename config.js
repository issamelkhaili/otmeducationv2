require('dotenv').config();
const crypto = require('crypto');

// Generate a random JWT secret if none is provided in .env
const generateRandomSecret = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Store the generated secret so it persists during the application's lifetime
const FALLBACK_JWT_SECRET = generateRandomSecret();

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/otm_agency',
  JWT_SECRET: process.env.JWT_SECRET || FALLBACK_JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY || '1d',
  NODE_ENV: process.env.NODE_ENV || 'development',
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:3000'
}; 