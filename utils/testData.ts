import { config } from 'dotenv';

config();

export const users = {
  validUser: {
    email: process.env.EMAIL || '',
    password: process.env.PASSWORD || ''
  }
};