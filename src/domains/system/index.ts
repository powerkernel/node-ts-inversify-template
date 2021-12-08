/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { System, SystemDoc } from "./System";
import ViewSystemUseCase from "./view-system/ViewSystemUseCase";
import ViewSystemRepository from "./view-system/ViewSystemRepository";
import IDENTIFIERS from "../../config/identifiers";
import container from "../../config/container";
import ViewSystemController from "./view-system/ViewSystemController";

const SystemInfoCtl = container.get<ViewSystemController>(IDENTIFIERS.ViewSystemController);
export {
  System,
  SystemDoc,
  SystemInfoCtl as ViewSystemController,
  ViewSystemUseCase,
  ViewSystemRepository,
};
