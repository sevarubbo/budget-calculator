import Model from '../core/model';

function attr () {

}

class Category extends Model {}

Category.fields = {
  /**
   * @memberOf Category#
   */
  name: attr(),
  totalSpend: attr()
};

export default Category;
