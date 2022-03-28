/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

/* npm packages */
import { Entity, Jsonifier } from "@powerkernel/power-common";

/* local imports */
import { SystemDto } from "../dtos";

class System extends Entity implements Jsonifier<SystemDto> {
  private wrappedVersion!: string;
  private wrappedHostname!: string;
  private wrappedNode!: string;
  private wrappedPlatform!: string;

  public get version(): string {
    return this.wrappedVersion;
  }

  public get hostname(): string {
    return this.wrappedHostname;
  }

  public get node(): string {
    return this.wrappedNode;
  }

  public get platform(): string {
    return this.wrappedPlatform;
  }

  private constructor(dto: SystemDto) {
    super();
    this.wrappedVersion = dto.version;
    this.wrappedHostname = dto.hostname;
    this.wrappedPlatform = dto.platform;
    this.wrappedNode = dto.node;
  }

  public static create(doc: SystemDto) {
    return new System(doc);
  }

  public jsonify(): SystemDto {
    return {
      version: this.version,
      hostname: this.hostname,
      platform: this.platform,
      node: this.node,
    };
  }
}

export default System;
