import { Controller, Post, Body, Get } from '@nestjs/common';
import { CarbonService } from './carbon.service';

@Controller()
export class CarbonController {
  constructor(private readonly carbonService: CarbonService) {}

  @Post('calculate')
  async calculateCarbonFootprint(@Body() data: any) {
    return this.carbonService.calculateCarbonFootprint(data);
  }

  @Get('history/:userId')
  async getCarbonHistory(userId: string) {
    return this.carbonService.getCarbonHistory(userId);
  }

  @Get('health')
  async health() {
    return { status: 'ok', service: 'carbon' };
  }
}
