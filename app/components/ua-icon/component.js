import Component from '@glimmer/component';

export default class UaIconComponent extends Component {
  ico = this.args.icon;
  path = this.args.path;
  dir = this.args.dir;
  src = this.getSrc(this.ico);

  getSrc(ico) {
    if (this.ico.fa) {
      return null;
    }
    const path = ico.path || this.path || 'assets/images'
    const dir = ico.dir || this.dir;
    const src = `${path ? path + '/':''}${dir ? dir + '/':''}${ico.file}`
    return src;
  }
}
