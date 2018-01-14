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

Model.register(Category);

export default Category;
