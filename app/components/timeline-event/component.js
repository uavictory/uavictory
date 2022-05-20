import Component from '@glimmer/component';

const DAY = 86400000;

export default class TimelineEventComponent extends Component {
  event = this.args.event;
  day1 = new Date('2022-02-24T00:00:00');
  date = this.event.d == 'Today' ? new Date() : new Date(this.event.d);
  day = Math.ceil((this.date - this.day1) / DAY) + 1;
}
