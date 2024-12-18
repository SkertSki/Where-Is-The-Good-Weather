import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

router.get('/', async (__req, res) => {
  try{
    const city = WeatherService.buildGeocodeQuery()
    res.json(city)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req: Request, res: Response) => {
  // TODO: GET weather data from city name
  req.
  // TODO: save city to search history
});

// TODO: GET search history
router.get('/history', async (req: Request, res: Response) => {

});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {

});

export default router;
