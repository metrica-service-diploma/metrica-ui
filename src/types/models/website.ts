import type { User } from "./user";

export type Website = {
  id: string;
  name: string;
  domain: string;
  trackingCode: string;
  createdAt: string;
  user: User;
};
