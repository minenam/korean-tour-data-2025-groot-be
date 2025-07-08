import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GamificationService } from './gamification.service';

@Controller()
export class GamificationController {
  constructor(private readonly gamificationService: GamificationService) {}

  @Get('dashboard/:userId')
  async getDashboard(userId: string) {
    return this.gamificationService.getDashboard(userId);
  }

  @Post('stamps')
  async collectStamp(@Body() data: any) {
    return this.gamificationService.collectStamp(data);
  }

  @Post('badges')
  async earnBadge(@Body() data: any) {
    return this.gamificationService.earnBadge(data);
  }

  @Post('missions')
  async completeMission(@Body() data: any) {
    return this.gamificationService.completeMission(data);
  }

  @Get('health')
  async health() {
    return { status: 'ok', service: 'gamification' };
  }
}
