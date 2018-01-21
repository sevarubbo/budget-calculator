import Model from '../core/model';

class Category extends Model {
  /**
   * @return {String}
   */
  get name () {
    return this.getAttribute('name');
  }

  /**
   * @return {Number}
   */
  get totalSpend () {
    return this.getAttribute('totalSpend');
  }
}

export default Category;
