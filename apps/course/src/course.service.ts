import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  async getCourses(query: any) {
    // TODO: Implement course filtering and search
    return { message: 'Courses retrieved successfully' };
  }

  async getCourseById(id: string) {
    // TODO: Implement get course by id
    return { message: 'Course retrieved successfully', id };
  }
}
