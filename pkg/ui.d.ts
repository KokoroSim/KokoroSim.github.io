/* tslint:disable */
/* eslint-disable */

export class HeartSystem {
    free(): void;
    [Symbol.dispose](): void;
    compute_ecg(): number;
    compute_ecg_lead(lead_idx: number): number;
    compute_selected_ion(): number;
    get_afferent_tone(): number;
    get_albumin(): number;
    get_aop(): number;
    get_aortic_regurgitation(): number;
    get_aortic_stenosis(): number;
    get_atrium_v(): number;
    get_av_v(): number;
    get_baro_delta_parasymp(): number;
    get_baro_delta_symp(): number;
    get_baro_s_baro(): number;
    get_baroreflex_enabled(): boolean;
    get_capillary_permeability(): number;
    static get_chunk_size(): number;
    get_cvf(): number;
    get_cvp(): number;
    get_diuresis(): number;
    get_ecg_lead(): number;
    get_ff(): number;
    get_fibroblast_v(): number;
    get_hemo_co(): number;
    get_hemo_edv(): number;
    get_hemo_ef(): number;
    get_hemo_esv(): number;
    get_hemo_lap(): number;
    get_hemo_map(): number;
    get_hemo_sv(): number;
    get_hud_metrics(): HudMetrics;
    get_inotropy(): number;
    get_ion_cell(): number;
    get_ion_var(): number;
    get_loop_diuretic(): number;
    get_lvp(): number;
    get_lvv(): number;
    get_mitral_regurgitation(): number;
    get_mitral_stenosis(): number;
    get_orthostasis(): boolean;
    get_pcp(): number;
    get_pef(): number;
    get_pi_c(): number;
    get_pmes(): number;
    get_pulmonary_edema(): number;
    get_purkinje_v(): number;
    get_r_rv(): number;
    get_raas_block(): boolean;
    get_rbf(): number;
    get_renal_map(): number;
    get_resp_flow(): number;
    get_resp_ppl(): number;
    get_resp_vol(): number;
    get_rpf(): number;
    get_rsa_enabled(): boolean;
    get_sa_v(): number;
    get_sodium_excretion(): number;
    get_spo2(): number;
    get_stenosis(): number;
    get_systemic_edema_godet(): number;
    get_tfg(): number;
    get_thiazide(): number;
    get_tiffeneau(): number;
    get_time(): number;
    get_vef1(): number;
    get_venous_return(): number;
    get_vent_endo_v(): number;
    get_vent_epi_v(): number;
    get_vent_m_v(): number;
    get_ventricle_v(): number;
    get_vlec(): number;
    get_water_intake(): number;
    infuse_fluid_bolus(volume_ml: number): void;
    is_in_spirometry(): boolean;
    constructor();
    run_batch(dt: number, steps: number, downsample: number): Float64Array;
    set_baroreflex_enabled(enabled: boolean): void;
    set_ecg_lead(lead: number): void;
    set_ion_cell(cell: number): void;
    set_ion_var(_var: number): void;
    set_microvascular_params(albumin: number, permeability: number): void;
    set_orthostasis(enabled: boolean): void;
    set_peripheral_resistance_ratio(ratio: number): void;
    set_pmes(pmes: number): void;
    set_renal_params(stenosis: number, afferent_tone: number, raas_block: boolean, loop_diuretic: number, thiazide: number, water_intake: number): void;
    set_respiratory_params(rate: number, raw: number, c_rs: number): void;
    set_rsa_enabled(enabled: boolean): void;
    set_valvopathy_params(aortic_stenosis: number, aortic_regurg: number, mitral_stenosis: number, mitral_regurg: number): void;
    step(dt: number): void;
    trigger_spirometry(): void;
    update_params(ko: number, cao: number, nao: number, block_na: number, block_k: number, block_ca: number, block_nak: number, symp: number, parasymp: number, isch: number, fibrosis: number): void;
    bpm: number;
    ion_cell: number;
    ion_var: number;
    pr_rr: number;
    pr: number;
    qrs: number;
    qt: number;
    rsa_enabled: boolean;
    v_rest: number;
}

export class HudMetrics {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    bpm: number;
    co: number;
    cvp: number;
    diuresis: number;
    edema_godet: number;
    edema_pulm: number;
    edv: number;
    ef: number;
    esv: number;
    ff: number;
    map: number;
    pcp: number;
    pi_c: number;
    pmes: number;
    pr_rr: number;
    pr: number;
    qrs: number;
    qt: number;
    renal_map: number;
    rpf: number;
    sodium_excretion: number;
    spo2: number;
    sv: number;
    tfg: number;
    v_rest: number;
    vlec: number;
}

export class JSOwner {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
}

export class Pharmaco {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    block_ca: number;
    block_k: number;
    block_na: number;
    block_nak: number;
    cao: number;
    fibrosis: number;
    isch: number;
    ko: number;
    nao: number;
    parasymp: number;
    symp: number;
}

export function init_engine(): string;

export function start(): void;

export function test_math(a: number, b: number): number;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly start: () => void;
    readonly __wbg_jsowner_free: (a: number, b: number) => void;
    readonly __wbg_get_heartsystem_bpm: (a: number) => number;
    readonly __wbg_get_heartsystem_ion_cell: (a: number) => number;
    readonly __wbg_get_heartsystem_ion_var: (a: number) => number;
    readonly __wbg_get_heartsystem_pr: (a: number) => number;
    readonly __wbg_get_heartsystem_pr_rr: (a: number) => number;
    readonly __wbg_get_heartsystem_qrs: (a: number) => number;
    readonly __wbg_get_heartsystem_qt: (a: number) => number;
    readonly __wbg_get_heartsystem_rsa_enabled: (a: number) => number;
    readonly __wbg_get_heartsystem_v_rest: (a: number) => number;
    readonly __wbg_get_hudmetrics_bpm: (a: number) => number;
    readonly __wbg_get_hudmetrics_co: (a: number) => number;
    readonly __wbg_get_hudmetrics_cvp: (a: number) => number;
    readonly __wbg_get_hudmetrics_diuresis: (a: number) => number;
    readonly __wbg_get_hudmetrics_edema_godet: (a: number) => number;
    readonly __wbg_get_hudmetrics_edema_pulm: (a: number) => number;
    readonly __wbg_get_hudmetrics_edv: (a: number) => number;
    readonly __wbg_get_hudmetrics_ef: (a: number) => number;
    readonly __wbg_get_hudmetrics_esv: (a: number) => number;
    readonly __wbg_get_hudmetrics_ff: (a: number) => number;
    readonly __wbg_get_hudmetrics_map: (a: number) => number;
    readonly __wbg_get_hudmetrics_pcp: (a: number) => number;
    readonly __wbg_get_hudmetrics_pi_c: (a: number) => number;
    readonly __wbg_get_hudmetrics_pmes: (a: number) => number;
    readonly __wbg_get_hudmetrics_pr: (a: number) => number;
    readonly __wbg_get_hudmetrics_pr_rr: (a: number) => number;
    readonly __wbg_get_hudmetrics_qrs: (a: number) => number;
    readonly __wbg_get_hudmetrics_qt: (a: number) => number;
    readonly __wbg_get_hudmetrics_renal_map: (a: number) => number;
    readonly __wbg_get_hudmetrics_rpf: (a: number) => number;
    readonly __wbg_get_hudmetrics_sodium_excretion: (a: number) => number;
    readonly __wbg_get_hudmetrics_spo2: (a: number) => number;
    readonly __wbg_get_hudmetrics_sv: (a: number) => number;
    readonly __wbg_get_hudmetrics_tfg: (a: number) => number;
    readonly __wbg_get_hudmetrics_v_rest: (a: number) => number;
    readonly __wbg_get_hudmetrics_vlec: (a: number) => number;
    readonly __wbg_heartsystem_free: (a: number, b: number) => void;
    readonly __wbg_hudmetrics_free: (a: number, b: number) => void;
    readonly __wbg_pharmaco_free: (a: number, b: number) => void;
    readonly __wbg_set_heartsystem_bpm: (a: number, b: number) => void;
    readonly __wbg_set_heartsystem_ion_cell: (a: number, b: number) => void;
    readonly __wbg_set_heartsystem_ion_var: (a: number, b: number) => void;
    readonly __wbg_set_heartsystem_pr: (a: number, b: number) => void;
    readonly __wbg_set_heartsystem_pr_rr: (a: number, b: number) => void;
    readonly __wbg_set_heartsystem_qrs: (a: number, b: number) => void;
    readonly __wbg_set_heartsystem_qt: (a: number, b: number) => void;
    readonly __wbg_set_heartsystem_rsa_enabled: (a: number, b: number) => void;
    readonly __wbg_set_heartsystem_v_rest: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_bpm: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_co: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_cvp: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_diuresis: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_edema_godet: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_edema_pulm: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_edv: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_ef: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_esv: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_ff: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_map: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_pcp: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_pi_c: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_pmes: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_pr: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_pr_rr: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_qrs: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_qt: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_renal_map: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_rpf: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_sodium_excretion: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_spo2: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_sv: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_tfg: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_v_rest: (a: number, b: number) => void;
    readonly __wbg_set_hudmetrics_vlec: (a: number, b: number) => void;
    readonly heartsystem_compute_ecg: (a: number) => number;
    readonly heartsystem_compute_ecg_lead: (a: number, b: number) => number;
    readonly heartsystem_compute_selected_ion: (a: number) => number;
    readonly heartsystem_get_afferent_tone: (a: number) => number;
    readonly heartsystem_get_albumin: (a: number) => number;
    readonly heartsystem_get_aop: (a: number) => number;
    readonly heartsystem_get_aortic_regurgitation: (a: number) => number;
    readonly heartsystem_get_aortic_stenosis: (a: number) => number;
    readonly heartsystem_get_atrium_v: (a: number) => number;
    readonly heartsystem_get_av_v: (a: number) => number;
    readonly heartsystem_get_baro_delta_parasymp: (a: number) => number;
    readonly heartsystem_get_baro_delta_symp: (a: number) => number;
    readonly heartsystem_get_baro_s_baro: (a: number) => number;
    readonly heartsystem_get_baroreflex_enabled: (a: number) => number;
    readonly heartsystem_get_capillary_permeability: (a: number) => number;
    readonly heartsystem_get_chunk_size: () => number;
    readonly heartsystem_get_cvf: (a: number) => number;
    readonly heartsystem_get_cvp: (a: number) => number;
    readonly heartsystem_get_diuresis: (a: number) => number;
    readonly heartsystem_get_ecg_lead: (a: number) => number;
    readonly heartsystem_get_ff: (a: number) => number;
    readonly heartsystem_get_fibroblast_v: (a: number) => number;
    readonly heartsystem_get_hemo_co: (a: number) => number;
    readonly heartsystem_get_hemo_edv: (a: number) => number;
    readonly heartsystem_get_hemo_ef: (a: number) => number;
    readonly heartsystem_get_hemo_esv: (a: number) => number;
    readonly heartsystem_get_hemo_lap: (a: number) => number;
    readonly heartsystem_get_hemo_map: (a: number) => number;
    readonly heartsystem_get_hemo_sv: (a: number) => number;
    readonly heartsystem_get_hud_metrics: (a: number) => number;
    readonly heartsystem_get_inotropy: (a: number) => number;
    readonly heartsystem_get_ion_cell: (a: number) => number;
    readonly heartsystem_get_ion_var: (a: number) => number;
    readonly heartsystem_get_loop_diuretic: (a: number) => number;
    readonly heartsystem_get_lvp: (a: number) => number;
    readonly heartsystem_get_lvv: (a: number) => number;
    readonly heartsystem_get_mitral_regurgitation: (a: number) => number;
    readonly heartsystem_get_mitral_stenosis: (a: number) => number;
    readonly heartsystem_get_orthostasis: (a: number) => number;
    readonly heartsystem_get_pcp: (a: number) => number;
    readonly heartsystem_get_pef: (a: number) => number;
    readonly heartsystem_get_pi_c: (a: number) => number;
    readonly heartsystem_get_pmes: (a: number) => number;
    readonly heartsystem_get_pulmonary_edema: (a: number) => number;
    readonly heartsystem_get_purkinje_v: (a: number) => number;
    readonly heartsystem_get_r_rv: (a: number) => number;
    readonly heartsystem_get_raas_block: (a: number) => number;
    readonly heartsystem_get_rbf: (a: number) => number;
    readonly heartsystem_get_renal_map: (a: number) => number;
    readonly heartsystem_get_resp_flow: (a: number) => number;
    readonly heartsystem_get_resp_ppl: (a: number) => number;
    readonly heartsystem_get_resp_vol: (a: number) => number;
    readonly heartsystem_get_rpf: (a: number) => number;
    readonly heartsystem_get_rsa_enabled: (a: number) => number;
    readonly heartsystem_get_sa_v: (a: number) => number;
    readonly heartsystem_get_sodium_excretion: (a: number) => number;
    readonly heartsystem_get_spo2: (a: number) => number;
    readonly heartsystem_get_stenosis: (a: number) => number;
    readonly heartsystem_get_systemic_edema_godet: (a: number) => number;
    readonly heartsystem_get_tfg: (a: number) => number;
    readonly heartsystem_get_thiazide: (a: number) => number;
    readonly heartsystem_get_tiffeneau: (a: number) => number;
    readonly heartsystem_get_time: (a: number) => number;
    readonly heartsystem_get_vef1: (a: number) => number;
    readonly heartsystem_get_venous_return: (a: number) => number;
    readonly heartsystem_get_vent_endo_v: (a: number) => number;
    readonly heartsystem_get_vent_epi_v: (a: number) => number;
    readonly heartsystem_get_vent_m_v: (a: number) => number;
    readonly heartsystem_get_vlec: (a: number) => number;
    readonly heartsystem_get_water_intake: (a: number) => number;
    readonly heartsystem_infuse_fluid_bolus: (a: number, b: number) => void;
    readonly heartsystem_is_in_spirometry: (a: number) => number;
    readonly heartsystem_new: () => number;
    readonly heartsystem_run_batch: (a: number, b: number, c: number, d: number) => [number, number];
    readonly heartsystem_set_baroreflex_enabled: (a: number, b: number) => void;
    readonly heartsystem_set_ecg_lead: (a: number, b: number) => void;
    readonly heartsystem_set_ion_cell: (a: number, b: number) => void;
    readonly heartsystem_set_ion_var: (a: number, b: number) => void;
    readonly heartsystem_set_microvascular_params: (a: number, b: number, c: number) => void;
    readonly heartsystem_set_orthostasis: (a: number, b: number) => void;
    readonly heartsystem_set_peripheral_resistance_ratio: (a: number, b: number) => void;
    readonly heartsystem_set_pmes: (a: number, b: number) => void;
    readonly heartsystem_set_renal_params: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
    readonly heartsystem_set_respiratory_params: (a: number, b: number, c: number, d: number) => void;
    readonly heartsystem_set_rsa_enabled: (a: number, b: number) => void;
    readonly heartsystem_set_valvopathy_params: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly heartsystem_step: (a: number, b: number) => void;
    readonly heartsystem_trigger_spirometry: (a: number) => void;
    readonly heartsystem_update_params: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number) => void;
    readonly init_engine: () => [number, number];
    readonly test_math: (a: number, b: number) => number;
    readonly __wbg_get_pharmaco_block_ca: (a: number) => number;
    readonly __wbg_get_pharmaco_block_k: (a: number) => number;
    readonly __wbg_get_pharmaco_block_na: (a: number) => number;
    readonly __wbg_get_pharmaco_block_nak: (a: number) => number;
    readonly __wbg_get_pharmaco_cao: (a: number) => number;
    readonly __wbg_get_pharmaco_fibrosis: (a: number) => number;
    readonly __wbg_get_pharmaco_isch: (a: number) => number;
    readonly __wbg_get_pharmaco_ko: (a: number) => number;
    readonly __wbg_get_pharmaco_nao: (a: number) => number;
    readonly __wbg_get_pharmaco_parasymp: (a: number) => number;
    readonly __wbg_get_pharmaco_symp: (a: number) => number;
    readonly __wbg_set_pharmaco_block_ca: (a: number, b: number) => void;
    readonly __wbg_set_pharmaco_block_k: (a: number, b: number) => void;
    readonly __wbg_set_pharmaco_block_na: (a: number, b: number) => void;
    readonly __wbg_set_pharmaco_block_nak: (a: number, b: number) => void;
    readonly __wbg_set_pharmaco_cao: (a: number, b: number) => void;
    readonly __wbg_set_pharmaco_fibrosis: (a: number, b: number) => void;
    readonly __wbg_set_pharmaco_isch: (a: number, b: number) => void;
    readonly __wbg_set_pharmaco_ko: (a: number, b: number) => void;
    readonly __wbg_set_pharmaco_nao: (a: number, b: number) => void;
    readonly __wbg_set_pharmaco_parasymp: (a: number, b: number) => void;
    readonly __wbg_set_pharmaco_symp: (a: number, b: number) => void;
    readonly heartsystem_get_ventricle_v: (a: number) => number;
    readonly wasm_bindgen_381fc749d335bd54___convert__closures_____invoke___wasm_bindgen_381fc749d335bd54___JsValue__core_ed718c3d60ebd546___result__Result_____wasm_bindgen_381fc749d335bd54___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_381fc749d335bd54___convert__closures________invoke___web_sys_a7fed436ea7fda92___features__gen_Event__Event______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_381fc749d335bd54___convert__closures_____invoke_______true_: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __externref_drop_slice: (a: number, b: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
