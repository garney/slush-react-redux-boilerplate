import express from 'express';
import cors from 'cors';
const Api = express.Router();
Api.use(cors());

Api.get('/content', (req, res) => {
  res.json({
    status: 200,
    data: {
      result: { foo: 'bar' }
    }
  });
});

export default Api;
