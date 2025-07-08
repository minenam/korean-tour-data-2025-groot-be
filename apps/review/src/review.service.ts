import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewService {
  async getReviews(courseId: string) {
    // TODO: Implement get reviews by course id
    return { message: 'Reviews retrieved successfully', courseId };
  }

  async createReview(data: any) {
    // TODO: Implement create review
    return { message: 'Review created successfully' };
  }
}
