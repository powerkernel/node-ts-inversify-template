/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import type { Container } from 'inversify';

/* local imports */
import IDENTIFIERS from './identifiers';
import { ViewSystemController } from '../domains/system/controllers';

/* main */
const bindControllers = (container: Container) => {
  container
    .bind<ViewSystemController>(IDENTIFIERS.ViewSystemController)
    .to(ViewSystemController);
};

/* export */
export { bindControllers };
