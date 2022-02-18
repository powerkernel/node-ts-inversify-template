/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import container from '../config/container';
import IDENTIFIERS from '../config/identifiers';
import type { ViewSystemController } from '../domains/system/controllers';

const resolvers = {
  Query: {
    system: () => {
      const ctl = container.get<ViewSystemController>(
        IDENTIFIERS.ViewSystemController
      );
      return ctl.execute();
    },
  },
};

export default resolvers;
