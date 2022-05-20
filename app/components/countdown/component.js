import Component from '@glimmer/component';
const DAY = 86400000;

export default class CountdownComponent extends Component {
  day1 = new Date('2022-02-24T00:00:00');
  indepDay = new Date('2022-08-24T00:00:00');
  today = new Date();
  warDay = Math.ceil((this.today - this.day1) / DAY);
  tillIndep = Math.ceil((this.indepDay - this.today) / DAY);
  widthPct = Math.ceil((this.tillIndep / (this.warDay + this.tillIndep)) * 100);
}
