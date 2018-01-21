import Model from '../core/model';

class IncomeCategory extends Model {
  /**
   * @return {String}
   */
  get name () {
    return this.getAttribute('name');
  }
}

export default IncomeCategory;
