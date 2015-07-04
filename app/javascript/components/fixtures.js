import Moment from 'Moment';

export var fixtures = [
  {
    id: 123,
    title: 'Test',
    startedAt: new Moment().subtract(7, 'days'),
    endedAt: new Moment().subtract(2, 'minutes'),
    events: [
      {
        id: 1,
        title: 'Started',
        timestamp: new Moment().subtract(7, 'days')
      }, {
        id: 2,
        title: 'Commit #123456',
        timestamp: new Moment().subtract(30, 'minutes')
      }, {
        id: 5,
        title: 'Commit #654321',
        timestamp: new Moment().subtract(10, 'minutes')
      }, {
        id: 6,
        title: 'Ended',
        timestamp: new Moment().subtract(2, 'minutes')
      }
    ]
  }, {
    id: 321,
    title: 'Testje',
    startedAt: new Moment().subtract(7, 'days'),
    endedAt: new Moment().subtract(2, 'minutes'),
    events: [
      {
        id: 7,
        title: 'Started',
        timestamp: new Moment().subtract(7, 'days')
      }, {
        id: 8,
        title: 'Commit #123456',
        timestamp: new Moment().subtract(30, 'minutes')
      }, {
        id: 11,
        title: 'Commit #654321',
        timestamp: new Moment().subtract(10, 'minutes')
      }, {
        id: 12,
        title: 'Ended',
        timestamp: new Moment().subtract(2, 'minutes')
      }
    ]
  }];
