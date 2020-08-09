export interface Lesson {
  id: string;
  subject: string;

  cost: number;

  user: {
    id: string;
    avatar: string;
    name: string;
    whatsapp: string;
    bio: string;
  };
}
