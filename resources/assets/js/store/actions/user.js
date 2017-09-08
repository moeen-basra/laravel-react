/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import {
  USER_ADD,
  USER_UPDATE,
  USER_REMOVE,
  USER_LIST,
} from '../action-types';

export function userAdd(payload) {
  return {
    type: USER_ADD,
    payload
  }
}

export function userUpdate(payload) {
  return {
    type: USER_UPDATE,
    payload,
  };
}

export function userRemove(payload) {
  return {
    type: USER_REMOVE,
    payload
  }
}

export function userList(payload) {
  return {
    type: USER_LIST,
    payload
  }
}

export default {
  userAdd,
  userUpdate,
  userRemove,
  userList,
};
