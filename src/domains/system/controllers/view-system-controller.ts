/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

/* npm packages */
import { inject, injectable } from 'inversify';

/* types imports */
import type ViewSystemUseCase from './../use-cases/view-system-use-case';

/* local imports */
import IDENTIFIERS from '../../../config/identifiers';

@injectable()
class ViewSystemController {
  useCase: ViewSystemUseCase;

  constructor(
    @inject(IDENTIFIERS.ViewSystemUseCase) useCase: ViewSystemUseCase
  ) {
    this.useCase = useCase;
  }

  public execute() {
    return this.useCase.execute();
  }
}

export default ViewSystemController;
