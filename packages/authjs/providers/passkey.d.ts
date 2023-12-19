import type { CommonProviderOptions } from "./index.js";
export type PasskeyProviderType = "passkey";
export declare const DEFAULT_PASSKEY_TIMEOUT: number;
type RelayingPartyConfig = {
    name: string;
    id: string;
    origin: string;
};
export interface PasskeyConfig extends CommonProviderOptions {
    type: PasskeyProviderType;
    /** Relaying party (RP) configuration. */
    relayingParty: RelayingPartyConfig;
    /** Timeout for passkey flows to be completed, in ms. Defaults to 5 minutes. */
    timeout: number;
}
/** The Passkey Provider needs to be configured. */
export type PasskeyInputConfig = Pick<PasskeyConfig, "relayingParty"> & Partial<PasskeyConfig>;
export default function Passkey(config: PasskeyInputConfig): PasskeyConfig;
export {};
//# sourceMappingURL=passkey.d.ts.map