import Model from '../core/model';

class IncomeCategory extends Model {}

IncomeCategory.fields = {
  /**
   * @memberOf IncomeCategory#
   */
  name: Model.attr()
};

export default IncomeCategory;
