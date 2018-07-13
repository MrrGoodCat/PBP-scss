import {Query} from './Query';

export interface Database {
  db_id: number; 	// if mapped
  db_type: string; 	// "8.9"
  db_name: string;	// uniq
  db_display_name: string;
  db_state: 'mapped' | 'unmapped';
  db_queries: Query[];
}
