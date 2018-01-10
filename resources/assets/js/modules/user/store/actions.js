/* ============
 * Actions for the user module
 * ============
 *
 * The actions that are available on the
 * user module.
 */

import {
  USER_UPDATE,
  USER_UNSET,
} from './action-types';

export function userUpdate(payload) {
  return {
    type: USER_UPDATE,
    payload,
  };
}

export function unsetUser() {
  return {
    type: USER_UNSET,
  }
}

