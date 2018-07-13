import {Injectable} from '@angular/core';

import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MockService implements InMemoryDbService {

  createDb() {
    const legacySites = [
      {
        db_id: 1, db_type: '8.9', db_name: 'nice_cls_89', db_display_name:  'Database 1', db_state: 'mapped',
        db_queries: [
          { query_id: 1,  query_name: 'Query', start_date : '2018-07-01T00:00:00Z',  end_date :  '2018-07-12T00:00:00Z' },
          { query_id: 2,  query_name: 'Query', start_date : '2018-07-01T00:00:00Z',  end_date :  '2018-07-12T00:00:00Z' },
          { query_id: 3,  query_name: 'Query', start_date : '2018-07-01T00:00:00Z',  end_date :  '2018-07-12T00:00:00Z' }
        ]
      },
      {
        db_id: 2, db_type: '8.9', db_name: 'nice_cls_89', db_display_name:  'Database 1', db_state: 'mapped',
        db_queries: [
          { query_id: 1,  query_name: 'Query', start_date : '2018-07-01T00:00:00Z',  end_date :  '2018-07-12T00:00:00Z' },
          { query_id: 2,  query_name: 'Query', start_date : '2018-07-01T00:00:00Z',  end_date :  '2018-07-12T00:00:00Z' },
          { query_id: 3,  query_name: 'Query', start_date : '2018-07-01T00:00:00Z',  end_date :  '2018-07-12T00:00:00Z' }
        ]
      },
      { db_id: -1, db_type: '8.9', db_name: 'nice_cls_89', db_display_name:  'Database 1', db_state: 'unmapped', db_queries: []},
      { db_id: -1, db_type: '8.9', db_name: 'nice_cls_89', db_display_name:  'Database 1', db_state: 'unmapped', db_queries: []},
    ];
    return {legacySites};
  }

}
