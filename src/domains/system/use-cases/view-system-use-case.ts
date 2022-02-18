/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

/* npm packages */
import { inject, injectable } from 'inversify';

/* types */
import type ViewSystemRepo from '../repositories/view-system-repo';

/* local imports */
import IDENTIFIERS from '../../../config/identifiers';
import { System } from './../entities';

@injectable()
class ViewSystemUseCase {
  repository: ViewSystemRepo;

  constructor(@inject(IDENTIFIERS.ViewSystemRepo) repository: ViewSystemRepo) {
    this.repository = repository;
  }

  public async execute() {
    const systemDoc = this.repository.viewInfo();

    const systemEntity = System.create(systemDoc);

    return systemEntity.jsonify();
  }
}

export default ViewSystemUseCase;
