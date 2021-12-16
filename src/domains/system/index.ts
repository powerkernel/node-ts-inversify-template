/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

/* types imports */
import type ViewSystemController from './view-system/view-system-controller';

/* local imports */
import { System, SystemDoc } from './system';
import ViewSystemUseCase from './view-system/view-system-use-case';
import ViewSystemRepository from './view-system/view-system-repository';
import IDENTIFIERS from '../../config/identifiers';
import container from '../../config/container';

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
