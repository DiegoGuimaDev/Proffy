export interface CreateLessonDTO {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: Array<{
    weekDay: number;
    from: string;
    to: string;
  }>;
}
