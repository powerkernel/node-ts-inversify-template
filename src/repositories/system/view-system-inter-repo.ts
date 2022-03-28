/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

/* npm packages */
import { injectable } from "inversify";
import os from "os";

/* local imports */
import ViewSystemRepository from "../../domains/system/repositories/view-system-repo";
import { SystemDto } from "../../domains/system/dtos";

@injectable()
class ViewSystemInterRepo implements ViewSystemRepository {
  viewInfo(): SystemDto {
    return {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      version: process.env.npm_package_version!,
      hostname: os.hostname(),
      node: process.version,
      platform: process.platform,
    };
  }
}

export default ViewSystemInterRepo;
