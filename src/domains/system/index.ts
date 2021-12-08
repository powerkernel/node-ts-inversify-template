/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

/* types imports */
import type ViewSystemController from "./view-system/ViewSystemController";

/* local imports */
import { System, SystemDoc } from "./System";
import ViewSystemUseCase from "./view-system/ViewSystemUseCase";
import ViewSystemRepository from "./view-system/ViewSystemRepository";
import IDENTIFIERS from "../../config/identifiers";
import container from "../../config/container";

const ViewSystemCtl = container.get<ViewSystemController>(
  IDENTIFIERS.ViewSystemController
);
export {
  System,
  SystemDoc,
  ViewSystemCtl as ViewSystemController,
  ViewSystemUseCase,
  ViewSystemRepository,
};
