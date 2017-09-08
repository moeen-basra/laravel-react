/* ============
 * Transformer
 * ============
 *
 * The base transformer.
 *
 * Transformers are used to transform the fetched data
 * to a more suitable format.
 * For instance, when the fetched data contains snake_cased values,
 * they will be camelCased.
 */

import _ from 'lodash';

export default class Transformer {
  /**
   * Method used to transform a fetched collection
   *
   * @param items The items to be transformed
   * @returns {Object} The transformed items
   */
  static fetchCollection(items) {
    if (typeof items === 'object') {
      return this.fetchObject(items);
    }
    return this.fetch(items);
  }
  
  /**
   * Method used to transform a fetched data
   *
   * @param param The fetched data
   *
   * @returns {Object} The transformed data
   */
  static fetch(param) {
    return param.map(item => this.fetch(item));
  }
  
  static fetchObject(param) {
    const data = {};
    
    _.forOwn(param, (value, key) => {
      data[_.camelCase(key)] = value;
    });
    return data;
  }
  
  /**
   * Method used to transform a collection to be send
   *
   * @param items The items to be transformed
   * @returns {array} The transformed items
   */
  static sendCollection(items) {
    if (typeof items === 'object') {
      return this.sendObject(items);
    }
    return this.send(items);
  }
  
  /**
   * Method used to transform a send data
   *
   * @param param The data to be send
   *
   * @returns {Object} The transformed data
   */
  static send(param) {
    return param.map(item => this.send(item));
  }
  
  static sendObject(param) {
    const data = {};
    
    _.forOwn(param, (value, key) => {
      data[_.snakeCase(key)] = value;
    });
    return data;
  }
  
  /**
   * Method used to transform a form errors
   *
   * @param errors The fetched data
   * @param replace Boolean
   * @param searchStr String
   * @param replaceStr String
   * @returns {{}}
   */
  static resetValidationFields({ errors, replace = false, searchStr = '', replaceStr = '' }) {
    const data = {};
    _.forOwn(errors, (value, key) => {
      let index = '';
      if (replace) {
        index = _.camelCase(key.replace(searchStr, replaceStr));
      } else {
        index = _.camelCase(key);
      }
      data[index] = _.head(value);
    });
    return data;
  }
}
