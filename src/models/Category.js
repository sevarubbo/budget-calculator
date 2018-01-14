import Model from '../core/model';

class Category extends Model {}

Category.fields = {
  /**
   * @memberOf Category#
   */
  name: Model.attr(),
  totalSpend: Model.attr()
};

export default Category;
