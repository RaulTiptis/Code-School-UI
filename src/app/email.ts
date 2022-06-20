import {Progress} from './progress';

export interface Registration{
    email: string;
    password: string;
    username: string;
    progress: Progress
    userRole: string;
    locked: false;
    enabled: false;
  }
