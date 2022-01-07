/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import container from '../config/container';
import IDENTIFIERS from '../config/identifiers';
import type { ViewSystemController } from '../domains/system/controllers';

const ViewSystemCtl = container.get<ViewSystemController>(
  IDENTIFIERS.ViewSystemController
);

const resolvers = {
  Query: {
    viewSystem: () => ViewSystemCtl.execute(),
  },
};

export default resolvers;
