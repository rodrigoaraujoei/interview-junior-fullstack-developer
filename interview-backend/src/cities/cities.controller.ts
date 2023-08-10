import { Controller, Get, Query } from '@nestjs/common';
import { promises as fs } from 'fs';

@Controller('cities')
export class CitiesController {
  @Get()
  async find(@Query('name') name: string) {
    const cities = JSON.parse(await fs.readFile('../cities.json', 'utf8'));
    return cities.filter(city => city.cityName.startsWith(name)).slice(0, 5);
  }
}