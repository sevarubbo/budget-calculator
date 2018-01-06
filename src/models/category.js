import Model from '../core/model';

function attr () {

}

class Category extends Model {}

Category.fields = {
  name: attr(),
  totalSpend: attr()
};

export default Category;
