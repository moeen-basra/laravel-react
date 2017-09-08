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
   * Method used to transform a fetched data
   *
   * @param param
   * @return {*}
   */
  static fetch(param) {
    if (typeof param === 'object') {
      return this.fetchObject(param);
    }
    return this.fetchCollection(param);
  }
  
  /**
   * Method used to transform a fetched collection
   *
   * @param param
   * @return [Array]
   */
  static fetchCollection(param) {
    return param.map(item => this.fetch(item));
  }
  
  /**
   * Method used to transform a fetched object
   *
   * @param param
   * @return {{}}
   */
  static fetchObject(param) {
    const data = {};
    
    _.forOwn(param, (value, key) => {
      data[_.camelCase(key)] = value;
    });
    return data;
  }
  
  /**
   * Method used to transform a send data
   *
   * @param param
   * @return {*}
   */
  static send(param) {
    if (typeof param === 'object') {
      return this.sendObject(param);
    }
    return this.sendCollection(param);
  }
  
  /**
   * Method used to transform a collection to be send
   *
   * @param param
   * @return [Array]
   */
  static sendCollection(param) {
    return param.map(item => this.send(item));
  }
  
  /**
   * Method used to transform a object to be send
   *
   * @param param
   * @returns {{}}
   */
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
