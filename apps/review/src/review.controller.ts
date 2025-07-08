import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReviewService } from './review.service';

@Controller()
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get('reviews/:courseId')
  async getReviews(courseId: string) {
    return this.reviewService.getReviews(courseId);
  }

  @Post('reviews')
  async createReview(@Body() data: any) {
    return this.reviewService.createReview(data);
  }

  @Get('health')
  async health() {
    return { status: 'ok', service: 'review' };
  }
}
