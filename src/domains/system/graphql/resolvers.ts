/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import container from "../../../config/container";
import IDENTIFIERS from "../../../config/identifiers";
import { ViewSystemController } from "../controllers";

export default {
  Query: {
    system: () => {
      const ctl = container.get<ViewSystemController>(
        IDENTIFIERS.ViewSystemController
      );
      return ctl.execute();
    },
  },
};
