/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { ViewSystemController } from './../domains/system';

const Query = {
  viewSystem: () => ViewSystemController.viewSystem(),
};

export { Query };
