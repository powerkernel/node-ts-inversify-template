/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

/* npm packages */
import { inject, injectable } from "inversify";

/* types imports */
import type ViewSystemAction from "../actions/view-system-action";

/* local imports */
import IDENTIFIERS from "../../../config/identifiers";

@injectable()
class ViewSystemController {
  action: ViewSystemAction;

  constructor(@inject(IDENTIFIERS.ViewSystemAction) action: ViewSystemAction) {
    this.action = action;
  }

  public async execute() {
    return {
      data: await this.action.execute(),
    };
  }
}

export default ViewSystemController;
