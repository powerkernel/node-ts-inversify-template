/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { inject, injectable } from "inversify";

/* local imports */
import IDENTIFIERS from "../../../config/identifiers";
import { System, ViewSystemRepository } from "../";

@injectable()
class ViewSystemUseCase {
  repository: ViewSystemRepository;

  constructor(@inject(IDENTIFIERS.ViewSystemRepository) repository: ViewSystemRepository) {
    this.repository = repository;
  }

  public async execute() {
    const systemDoc = this.repository.viewInfo();

    const systemEntity = System.create(systemDoc);

    return systemEntity.toJson();
  }
}

export default ViewSystemUseCase;
