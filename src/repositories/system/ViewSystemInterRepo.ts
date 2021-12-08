/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { injectable } from "inversify";
import ViewSystemRepository from "../../domains/system/view-system/ViewSystemRepository";

/* local imports */
import { SystemDoc } from "../../domains/system/System";

@injectable()
class ViewSystemInterRepo implements ViewSystemRepository {
  viewInfo(): SystemDoc {
    return {
      version: process.env.npm_package_version ?? "unknown",
      node: process.version,
      platform: process.platform,
    };
  }
}

export default ViewSystemInterRepo;
