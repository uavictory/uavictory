import Component from '@glimmer/component';
import { capitalize } from '@ember/string';

import { armsTypes } from '../../../content/data/weapons-supplied';

const unspecifiedSupplied = 'unspecified amount'

export default class DataWeaponsByCountryComponent extends Component {
  data = this.args.data
  country = capitalize(this.data.c);

  get arms() {
    const supplied = this.data.arms;
    let items = armsTypes.filter(type => supplied[type.key])
    items = items.map(item => ({lbl: item.label, txt: supplied[item.key] }))
    items = items.map(item => ({lbl: item.lbl, txt: item.txt == true ? unspecifiedSupplied : item.txt }))
    return items;
  }
        


}
