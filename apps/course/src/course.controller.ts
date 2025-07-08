import { Controller, Get, Query } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller()
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get('courses')
  async getCourses(@Query() query: any) {
    return this.courseService.getCourses(query);
  }

  @Get('courses/:id')
  async getCourseById(id: string) {
    return this.courseService.getCourseById(id);
  }

  @Get('health')
  async health() {
    return { status: 'ok', service: 'course' };
  }
}
