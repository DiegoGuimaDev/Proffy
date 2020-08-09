import { api } from './api';
import { Lesson } from '../models/Lesson';
import { CreateLessonDTO } from '../dtos/CreateLessonDTO';

export function getClasses(params: {
  weekDay: number;
  subject: string;
  time: string;
}): Promise<Lesson[]> {
  return api
    .get<Lesson[]>('classes', { params })
    .then(response => response.data);
}

export function createLesson(dto: CreateLessonDTO): Promise<void> {
  return api.post('classes', dto);
}
