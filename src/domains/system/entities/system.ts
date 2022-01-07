/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

/* npm packages */
import { Entity, Jsonifier } from '@powerkernel/power-common';

/* local imports */
import { SystemDto } from '../dtos';

class System extends Entity implements Jsonifier<SystemDto> {
  private wrappedNode!: string;
  private wrappedPlatform!: string;

  public get node(): string {
    return this.wrappedNode;
  }

  public get platform(): string {
    return this.wrappedPlatform;
  }

  private constructor(doc: SystemDto) {
    super();
    this.wrappedPlatform = doc.platform;
    this.wrappedNode = doc.node;
  }

  public static create(doc: SystemDto) {
    return new System(doc);
  }

  public jsonify(): SystemDto {
    return {
      platform: this.platform,
      node: this.node,
    };
  }
}

export default System;
