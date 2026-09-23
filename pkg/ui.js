/* @ts-self-types="./ui.d.ts" */
import { RawInterpreter } from './snippets/dioxus-interpreter-js-7e2aed97ebee2c55/inline0.js';
import { setAttributeInner } from './snippets/dioxus-interpreter-js-7e2aed97ebee2c55/src/js/common.js';
import { WebDioxusChannel } from './snippets/dioxus-interpreter-js-7e2aed97ebee2c55/src/js/eval.js';
import { get_select_data } from './snippets/dioxus-web-10186f9fcc0b4418/inline0.js';
import * as import1 from "./snippets/dioxus-web-10186f9fcc0b4418/inline1.js"


export class HeartSystem {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        HeartSystemFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_heartsystem_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get bpm() {
        const ret = wasm.__wbg_get_heartsystem_bpm(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get ion_cell() {
        const ret = wasm.__wbg_get_heartsystem_ion_cell(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get ion_var() {
        const ret = wasm.__wbg_get_heartsystem_ion_var(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get pr_rr() {
        const ret = wasm.__wbg_get_heartsystem_pr_rr(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get pr() {
        const ret = wasm.__wbg_get_heartsystem_pr(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get qrs() {
        const ret = wasm.__wbg_get_heartsystem_qrs(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get qt() {
        const ret = wasm.__wbg_get_heartsystem_qt(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {boolean}
     */
    get rsa_enabled() {
        const ret = wasm.__wbg_get_heartsystem_rsa_enabled(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {number}
     */
    get v_rest() {
        const ret = wasm.__wbg_get_heartsystem_v_rest(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    compute_ecg() {
        const ret = wasm.heartsystem_compute_ecg(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} lead_idx
     * @returns {number}
     */
    compute_ecg_lead(lead_idx) {
        const ret = wasm.heartsystem_compute_ecg_lead(this.__wbg_ptr, lead_idx);
        return ret;
    }
    /**
     * @returns {number}
     */
    compute_selected_ion() {
        const ret = wasm.heartsystem_compute_selected_ion(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_afferent_tone() {
        const ret = wasm.heartsystem_get_afferent_tone(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_albumin() {
        const ret = wasm.heartsystem_get_albumin(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_aop() {
        const ret = wasm.heartsystem_get_aop(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_aortic_regurgitation() {
        const ret = wasm.heartsystem_get_aortic_regurgitation(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_aortic_stenosis() {
        const ret = wasm.heartsystem_get_aortic_stenosis(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_atrium_v() {
        const ret = wasm.heartsystem_get_atrium_v(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_av_v() {
        const ret = wasm.heartsystem_get_av_v(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_baro_delta_parasymp() {
        const ret = wasm.heartsystem_get_baro_delta_parasymp(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_baro_delta_symp() {
        const ret = wasm.heartsystem_get_baro_delta_symp(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_baro_s_baro() {
        const ret = wasm.heartsystem_get_baro_s_baro(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {boolean}
     */
    get_baroreflex_enabled() {
        const ret = wasm.heartsystem_get_baroreflex_enabled(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {number}
     */
    get_capillary_permeability() {
        const ret = wasm.heartsystem_get_capillary_permeability(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    static get_chunk_size() {
        const ret = wasm.heartsystem_get_chunk_size();
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get_cvf() {
        const ret = wasm.heartsystem_get_cvf(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_cvp() {
        const ret = wasm.heartsystem_get_cvp(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_diuresis() {
        const ret = wasm.heartsystem_get_diuresis(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_ecg_lead() {
        const ret = wasm.heartsystem_get_ecg_lead(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get_ff() {
        const ret = wasm.heartsystem_get_ff(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_fibroblast_v() {
        const ret = wasm.heartsystem_get_fibroblast_v(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_hemo_co() {
        const ret = wasm.heartsystem_get_hemo_co(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_hemo_edv() {
        const ret = wasm.heartsystem_get_hemo_edv(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_hemo_ef() {
        const ret = wasm.heartsystem_get_hemo_ef(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_hemo_esv() {
        const ret = wasm.heartsystem_get_hemo_esv(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_hemo_lap() {
        const ret = wasm.heartsystem_get_hemo_lap(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_hemo_map() {
        const ret = wasm.heartsystem_get_hemo_map(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_hemo_sv() {
        const ret = wasm.heartsystem_get_hemo_sv(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {HudMetrics}
     */
    get_hud_metrics() {
        const ret = wasm.heartsystem_get_hud_metrics(this.__wbg_ptr);
        return HudMetrics.__wrap(ret);
    }
    /**
     * @returns {number}
     */
    get_inotropy() {
        const ret = wasm.heartsystem_get_inotropy(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_ion_cell() {
        const ret = wasm.heartsystem_get_ion_cell(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get_ion_var() {
        const ret = wasm.heartsystem_get_ion_var(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get_loop_diuretic() {
        const ret = wasm.heartsystem_get_loop_diuretic(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_lvp() {
        const ret = wasm.heartsystem_get_lvp(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_lvv() {
        const ret = wasm.heartsystem_get_lvv(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_mitral_regurgitation() {
        const ret = wasm.heartsystem_get_mitral_regurgitation(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_mitral_stenosis() {
        const ret = wasm.heartsystem_get_mitral_stenosis(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {boolean}
     */
    get_orthostasis() {
        const ret = wasm.heartsystem_get_orthostasis(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {number}
     */
    get_pcp() {
        const ret = wasm.heartsystem_get_pcp(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_pef() {
        const ret = wasm.heartsystem_get_pef(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_pi_c() {
        const ret = wasm.heartsystem_get_pi_c(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_pmes() {
        const ret = wasm.heartsystem_get_pmes(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_pulmonary_edema() {
        const ret = wasm.heartsystem_get_pulmonary_edema(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_purkinje_v() {
        const ret = wasm.heartsystem_get_purkinje_v(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_r_rv() {
        const ret = wasm.heartsystem_get_r_rv(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {boolean}
     */
    get_raas_block() {
        const ret = wasm.heartsystem_get_raas_block(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {number}
     */
    get_rbf() {
        const ret = wasm.heartsystem_get_rbf(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_renal_map() {
        const ret = wasm.heartsystem_get_renal_map(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_resp_flow() {
        const ret = wasm.heartsystem_get_resp_flow(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_resp_ppl() {
        const ret = wasm.heartsystem_get_resp_ppl(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_resp_vol() {
        const ret = wasm.heartsystem_get_resp_vol(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_rpf() {
        const ret = wasm.heartsystem_get_rpf(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {boolean}
     */
    get_rsa_enabled() {
        const ret = wasm.heartsystem_get_rsa_enabled(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {number}
     */
    get_sa_v() {
        const ret = wasm.heartsystem_get_sa_v(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_sodium_excretion() {
        const ret = wasm.heartsystem_get_sodium_excretion(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_spo2() {
        const ret = wasm.heartsystem_get_spo2(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_stenosis() {
        const ret = wasm.heartsystem_get_stenosis(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_systemic_edema_godet() {
        const ret = wasm.heartsystem_get_systemic_edema_godet(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_tfg() {
        const ret = wasm.heartsystem_get_tfg(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_thiazide() {
        const ret = wasm.heartsystem_get_thiazide(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_tiffeneau() {
        const ret = wasm.heartsystem_get_tiffeneau(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_time() {
        const ret = wasm.heartsystem_get_time(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_vef1() {
        const ret = wasm.heartsystem_get_vef1(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_venous_return() {
        const ret = wasm.heartsystem_get_venous_return(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_vent_endo_v() {
        const ret = wasm.heartsystem_get_vent_endo_v(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_vent_epi_v() {
        const ret = wasm.heartsystem_get_vent_epi_v(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_vent_m_v() {
        const ret = wasm.heartsystem_get_vent_m_v(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_ventricle_v() {
        const ret = wasm.heartsystem_get_ventricle_v(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_vlec() {
        const ret = wasm.heartsystem_get_vlec(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get_water_intake() {
        const ret = wasm.heartsystem_get_water_intake(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} volume_ml
     */
    infuse_fluid_bolus(volume_ml) {
        wasm.heartsystem_infuse_fluid_bolus(this.__wbg_ptr, volume_ml);
    }
    /**
     * @returns {boolean}
     */
    is_in_spirometry() {
        const ret = wasm.heartsystem_is_in_spirometry(this.__wbg_ptr);
        return ret !== 0;
    }
    constructor() {
        const ret = wasm.heartsystem_new();
        this.__wbg_ptr = ret;
        HeartSystemFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {number} dt
     * @param {number} steps
     * @param {number} downsample
     * @returns {Float64Array}
     */
    run_batch(dt, steps, downsample) {
        const ret = wasm.heartsystem_run_batch(this.__wbg_ptr, dt, steps, downsample);
        var v1 = getArrayF64FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 8, 8);
        return v1;
    }
    /**
     * @param {boolean} enabled
     */
    set_baroreflex_enabled(enabled) {
        wasm.heartsystem_set_baroreflex_enabled(this.__wbg_ptr, enabled);
    }
    /**
     * @param {number} lead
     */
    set_ecg_lead(lead) {
        wasm.heartsystem_set_ecg_lead(this.__wbg_ptr, lead);
    }
    /**
     * @param {number} cell
     */
    set_ion_cell(cell) {
        wasm.heartsystem_set_ion_cell(this.__wbg_ptr, cell);
    }
    /**
     * @param {number} _var
     */
    set_ion_var(_var) {
        wasm.heartsystem_set_ion_var(this.__wbg_ptr, _var);
    }
    /**
     * @param {number} albumin
     * @param {number} permeability
     */
    set_microvascular_params(albumin, permeability) {
        wasm.heartsystem_set_microvascular_params(this.__wbg_ptr, albumin, permeability);
    }
    /**
     * @param {boolean} enabled
     */
    set_orthostasis(enabled) {
        wasm.heartsystem_set_orthostasis(this.__wbg_ptr, enabled);
    }
    /**
     * @param {number} ratio
     */
    set_peripheral_resistance_ratio(ratio) {
        wasm.heartsystem_set_peripheral_resistance_ratio(this.__wbg_ptr, ratio);
    }
    /**
     * @param {number} pmes
     */
    set_pmes(pmes) {
        wasm.heartsystem_set_pmes(this.__wbg_ptr, pmes);
    }
    /**
     * @param {number} stenosis
     * @param {number} afferent_tone
     * @param {boolean} raas_block
     * @param {number} loop_diuretic
     * @param {number} thiazide
     * @param {number} water_intake
     */
    set_renal_params(stenosis, afferent_tone, raas_block, loop_diuretic, thiazide, water_intake) {
        wasm.heartsystem_set_renal_params(this.__wbg_ptr, stenosis, afferent_tone, raas_block, loop_diuretic, thiazide, water_intake);
    }
    /**
     * @param {number} rate
     * @param {number} raw
     * @param {number} c_rs
     */
    set_respiratory_params(rate, raw, c_rs) {
        wasm.heartsystem_set_respiratory_params(this.__wbg_ptr, rate, raw, c_rs);
    }
    /**
     * @param {boolean} enabled
     */
    set_rsa_enabled(enabled) {
        wasm.heartsystem_set_rsa_enabled(this.__wbg_ptr, enabled);
    }
    /**
     * @param {number} aortic_stenosis
     * @param {number} aortic_regurg
     * @param {number} mitral_stenosis
     * @param {number} mitral_regurg
     */
    set_valvopathy_params(aortic_stenosis, aortic_regurg, mitral_stenosis, mitral_regurg) {
        wasm.heartsystem_set_valvopathy_params(this.__wbg_ptr, aortic_stenosis, aortic_regurg, mitral_stenosis, mitral_regurg);
    }
    /**
     * @param {number} dt
     */
    step(dt) {
        wasm.heartsystem_step(this.__wbg_ptr, dt);
    }
    trigger_spirometry() {
        wasm.heartsystem_trigger_spirometry(this.__wbg_ptr);
    }
    /**
     * @param {number} ko
     * @param {number} cao
     * @param {number} nao
     * @param {number} block_na
     * @param {number} block_k
     * @param {number} block_ca
     * @param {number} block_nak
     * @param {number} symp
     * @param {number} parasymp
     * @param {number} isch
     * @param {number} fibrosis
     */
    update_params(ko, cao, nao, block_na, block_k, block_ca, block_nak, symp, parasymp, isch, fibrosis) {
        wasm.heartsystem_update_params(this.__wbg_ptr, ko, cao, nao, block_na, block_k, block_ca, block_nak, symp, parasymp, isch, fibrosis);
    }
    /**
     * @param {number} arg0
     */
    set bpm(arg0) {
        wasm.__wbg_set_heartsystem_bpm(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set ion_cell(arg0) {
        wasm.__wbg_set_heartsystem_ion_cell(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set ion_var(arg0) {
        wasm.__wbg_set_heartsystem_ion_var(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set pr_rr(arg0) {
        wasm.__wbg_set_heartsystem_pr_rr(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set pr(arg0) {
        wasm.__wbg_set_heartsystem_pr(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set qrs(arg0) {
        wasm.__wbg_set_heartsystem_qrs(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set qt(arg0) {
        wasm.__wbg_set_heartsystem_qt(this.__wbg_ptr, arg0);
    }
    /**
     * @param {boolean} arg0
     */
    set rsa_enabled(arg0) {
        wasm.__wbg_set_heartsystem_rsa_enabled(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set v_rest(arg0) {
        wasm.__wbg_set_heartsystem_v_rest(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) HeartSystem.prototype[Symbol.dispose] = HeartSystem.prototype.free;

export class HudMetrics {
    static __wrap(ptr) {
        const obj = Object.create(HudMetrics.prototype);
        obj.__wbg_ptr = ptr;
        HudMetricsFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        HudMetricsFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_hudmetrics_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get bpm() {
        const ret = wasm.__wbg_get_hudmetrics_bpm(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get co() {
        const ret = wasm.__wbg_get_hudmetrics_co(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get cvp() {
        const ret = wasm.__wbg_get_hudmetrics_cvp(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get diuresis() {
        const ret = wasm.__wbg_get_hudmetrics_diuresis(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get edema_godet() {
        const ret = wasm.__wbg_get_hudmetrics_edema_godet(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get edema_pulm() {
        const ret = wasm.__wbg_get_hudmetrics_edema_pulm(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get edv() {
        const ret = wasm.__wbg_get_hudmetrics_edv(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get ef() {
        const ret = wasm.__wbg_get_hudmetrics_ef(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get esv() {
        const ret = wasm.__wbg_get_hudmetrics_esv(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get ff() {
        const ret = wasm.__wbg_get_hudmetrics_ff(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get map() {
        const ret = wasm.__wbg_get_hudmetrics_map(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get pcp() {
        const ret = wasm.__wbg_get_hudmetrics_pcp(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get pi_c() {
        const ret = wasm.__wbg_get_hudmetrics_pi_c(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get pmes() {
        const ret = wasm.__wbg_get_hudmetrics_pmes(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get pr_rr() {
        const ret = wasm.__wbg_get_hudmetrics_pr_rr(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get pr() {
        const ret = wasm.__wbg_get_hudmetrics_pr(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get qrs() {
        const ret = wasm.__wbg_get_hudmetrics_qrs(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get qt() {
        const ret = wasm.__wbg_get_hudmetrics_qt(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get renal_map() {
        const ret = wasm.__wbg_get_hudmetrics_renal_map(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get rpf() {
        const ret = wasm.__wbg_get_hudmetrics_rpf(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get sodium_excretion() {
        const ret = wasm.__wbg_get_hudmetrics_sodium_excretion(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get spo2() {
        const ret = wasm.__wbg_get_hudmetrics_spo2(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get sv() {
        const ret = wasm.__wbg_get_hudmetrics_sv(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get tfg() {
        const ret = wasm.__wbg_get_hudmetrics_tfg(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get v_rest() {
        const ret = wasm.__wbg_get_hudmetrics_v_rest(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get vlec() {
        const ret = wasm.__wbg_get_hudmetrics_vlec(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set bpm(arg0) {
        wasm.__wbg_set_hudmetrics_bpm(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set co(arg0) {
        wasm.__wbg_set_hudmetrics_co(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set cvp(arg0) {
        wasm.__wbg_set_hudmetrics_cvp(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set diuresis(arg0) {
        wasm.__wbg_set_hudmetrics_diuresis(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set edema_godet(arg0) {
        wasm.__wbg_set_hudmetrics_edema_godet(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set edema_pulm(arg0) {
        wasm.__wbg_set_hudmetrics_edema_pulm(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set edv(arg0) {
        wasm.__wbg_set_hudmetrics_edv(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set ef(arg0) {
        wasm.__wbg_set_hudmetrics_ef(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set esv(arg0) {
        wasm.__wbg_set_hudmetrics_esv(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set ff(arg0) {
        wasm.__wbg_set_hudmetrics_ff(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set map(arg0) {
        wasm.__wbg_set_hudmetrics_map(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set pcp(arg0) {
        wasm.__wbg_set_hudmetrics_pcp(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set pi_c(arg0) {
        wasm.__wbg_set_hudmetrics_pi_c(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set pmes(arg0) {
        wasm.__wbg_set_hudmetrics_pmes(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set pr_rr(arg0) {
        wasm.__wbg_set_hudmetrics_pr_rr(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set pr(arg0) {
        wasm.__wbg_set_hudmetrics_pr(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set qrs(arg0) {
        wasm.__wbg_set_hudmetrics_qrs(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set qt(arg0) {
        wasm.__wbg_set_hudmetrics_qt(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set renal_map(arg0) {
        wasm.__wbg_set_hudmetrics_renal_map(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set rpf(arg0) {
        wasm.__wbg_set_hudmetrics_rpf(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set sodium_excretion(arg0) {
        wasm.__wbg_set_hudmetrics_sodium_excretion(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set spo2(arg0) {
        wasm.__wbg_set_hudmetrics_spo2(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set sv(arg0) {
        wasm.__wbg_set_hudmetrics_sv(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set tfg(arg0) {
        wasm.__wbg_set_hudmetrics_tfg(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set v_rest(arg0) {
        wasm.__wbg_set_hudmetrics_v_rest(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set vlec(arg0) {
        wasm.__wbg_set_hudmetrics_vlec(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) HudMetrics.prototype[Symbol.dispose] = HudMetrics.prototype.free;

export class JSOwner {
    static __wrap(ptr) {
        const obj = Object.create(JSOwner.prototype);
        obj.__wbg_ptr = ptr;
        JSOwnerFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        JSOwnerFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_jsowner_free(ptr, 0);
    }
}
if (Symbol.dispose) JSOwner.prototype[Symbol.dispose] = JSOwner.prototype.free;

export class Pharmaco {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        PharmacoFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_pharmaco_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get block_ca() {
        const ret = wasm.__wbg_get_pharmaco_block_ca(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get block_k() {
        const ret = wasm.__wbg_get_pharmaco_block_k(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get block_na() {
        const ret = wasm.__wbg_get_pharmaco_block_na(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get block_nak() {
        const ret = wasm.__wbg_get_pharmaco_block_nak(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get cao() {
        const ret = wasm.__wbg_get_pharmaco_cao(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get fibrosis() {
        const ret = wasm.__wbg_get_pharmaco_fibrosis(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get isch() {
        const ret = wasm.__wbg_get_pharmaco_isch(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get ko() {
        const ret = wasm.__wbg_get_pharmaco_ko(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get nao() {
        const ret = wasm.__wbg_get_pharmaco_nao(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get parasymp() {
        const ret = wasm.__wbg_get_pharmaco_parasymp(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get symp() {
        const ret = wasm.__wbg_get_pharmaco_symp(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set block_ca(arg0) {
        wasm.__wbg_set_pharmaco_block_ca(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set block_k(arg0) {
        wasm.__wbg_set_pharmaco_block_k(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set block_na(arg0) {
        wasm.__wbg_set_pharmaco_block_na(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set block_nak(arg0) {
        wasm.__wbg_set_pharmaco_block_nak(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set cao(arg0) {
        wasm.__wbg_set_pharmaco_cao(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set fibrosis(arg0) {
        wasm.__wbg_set_pharmaco_fibrosis(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set isch(arg0) {
        wasm.__wbg_set_pharmaco_isch(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set ko(arg0) {
        wasm.__wbg_set_pharmaco_ko(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set nao(arg0) {
        wasm.__wbg_set_pharmaco_nao(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set parasymp(arg0) {
        wasm.__wbg_set_pharmaco_parasymp(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set symp(arg0) {
        wasm.__wbg_set_pharmaco_symp(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) Pharmaco.prototype[Symbol.dispose] = Pharmaco.prototype.free;

/**
 * @returns {string}
 */
export function init_engine() {
    let deferred1_0;
    let deferred1_1;
    try {
        const ret = wasm.init_engine();
        deferred1_0 = ret[0];
        deferred1_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}

export function start() {
    wasm.start();
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function test_math(a, b) {
    const ret = wasm.test_math(a, b);
    return ret;
}
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Error_408e67f47ca7b58b: function(arg0, arg1) {
            const ret = Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_Q_782e2a5a02bb9fd4: function(arg0) {
            const ret = arg0.Q;
            return ret;
        },
        __wbg_String_b51de6b05a10845b: function(arg0, arg1) {
            const ret = String(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_bigint_get_as_i64_c4ecf48528083721: function(arg0, arg1) {
            const v = arg1;
            const ret = typeof(v) === 'bigint' ? v : undefined;
            getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_boolean_get_c9c83ebd41b34df3: function(arg0) {
            const v = arg0;
            const ret = typeof(v) === 'boolean' ? v : undefined;
            return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
        },
        __wbg___wbindgen_debug_string_a57024b9c6e4a48b: function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_in_ac983077f137f2e6: function(arg0, arg1) {
            const ret = arg0 in arg1;
            return ret;
        },
        __wbg___wbindgen_is_bigint_8ffbbef442139384: function(arg0) {
            const ret = typeof(arg0) === 'bigint';
            return ret;
        },
        __wbg___wbindgen_is_function_5e4570eb24ffa122: function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_object_a2790eb24c211ea0: function(arg0) {
            const val = arg0;
            const ret = typeof(val) === 'object' && val !== null;
            return ret;
        },
        __wbg___wbindgen_is_string_e6f02f0ea5f20a32: function(arg0) {
            const ret = typeof(arg0) === 'string';
            return ret;
        },
        __wbg___wbindgen_is_undefined_6cff064c44e0d823: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_jsval_eq_0a18949a61670320: function(arg0, arg1) {
            const ret = arg0 === arg1;
            return ret;
        },
        __wbg___wbindgen_jsval_loose_eq_acf2776254a8d832: function(arg0, arg1) {
            const ret = arg0 == arg1;
            return ret;
        },
        __wbg___wbindgen_memory_5dc2a138835b0f8e: function() {
            const ret = wasm.memory;
            return ret;
        },
        __wbg___wbindgen_number_get_136b9679cab35cfb: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'number' ? obj : undefined;
            getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_string_get_d154f1e671052120: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_bb96b2010945f0bc: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_be22cc64ae6946a0: function(arg0) {
            arg0._wbg_cb_unref();
        },
        __wbg_altKey_755975127b4ad2c8: function(arg0) {
            const ret = arg0.altKey;
            return ret;
        },
        __wbg_appendChild_d5cbce3d5fa81471: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.appendChild(arg1);
            return ret;
        }, arguments); },
        __wbg_arc_782f59ce766a8abb: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.arc(arg1, arg2, arg3, arg4, arg5);
        }, arguments); },
        __wbg_beginPath_4b87fe7ed5408cac: function(arg0) {
            arg0.beginPath();
        },
        __wbg_bubbles_004494fc9c11b448: function(arg0) {
            const ret = arg0.bubbles;
            return ret;
        },
        __wbg_button_3963e81aec2b2f60: function(arg0) {
            const ret = arg0.button;
            return ret;
        },
        __wbg_buttons_688a15d7be68a0b2: function(arg0) {
            const ret = arg0.buttons;
            return ret;
        },
        __wbg_call_1c5886ab9c57d1c7: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.call(arg1);
            return ret;
        }, arguments); },
        __wbg_call_35dba3c747ad7521: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_charCodeAt_ee49a2dd698e4f66: function(arg0, arg1) {
            const ret = arg0.charCodeAt(arg1 >>> 0);
            return ret;
        },
        __wbg_checked_e5cdc0e72e42fdfd: function(arg0) {
            const ret = arg0.checked;
            return ret;
        },
        __wbg_clearTimeout_113b1cde814ec762: function(arg0) {
            const ret = clearTimeout(arg0);
            return ret;
        },
        __wbg_clientHeight_834c029be3d903a7: function(arg0) {
            const ret = arg0.clientHeight;
            return ret;
        },
        __wbg_clientWidth_ad03e8eb6c2b0c56: function(arg0) {
            const ret = arg0.clientWidth;
            return ret;
        },
        __wbg_clientX_73f0b294f91b259a: function(arg0) {
            const ret = arg0.clientX;
            return ret;
        },
        __wbg_clientY_a4c1ea57bd41430f: function(arg0) {
            const ret = arg0.clientY;
            return ret;
        },
        __wbg_connect_d2a36cf1f5a1ec54: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.connect(arg1);
            return ret;
        }, arguments); },
        __wbg_createBiquadFilter_343a03f0dac9a4b2: function() { return handleError(function (arg0) {
            const ret = arg0.createBiquadFilter();
            return ret;
        }, arguments); },
        __wbg_createElementNS_f18ede2d74f15ea1: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            const ret = arg0.createElementNS(arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            return ret;
        }, arguments); },
        __wbg_createElement_7f42344eee7bb810: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.createElement(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_createGain_7d1b9af970ffce1b: function() { return handleError(function (arg0) {
            const ret = arg0.createGain();
            return ret;
        }, arguments); },
        __wbg_createOscillator_92b3cdc31a7342ba: function() { return handleError(function (arg0) {
            const ret = arg0.createOscillator();
            return ret;
        }, arguments); },
        __wbg_createTextNode_f5ee2b1cd3e249bb: function(arg0, arg1, arg2) {
            const ret = arg0.createTextNode(getStringFromWasm0(arg1, arg2));
            return ret;
        },
        __wbg_ctrlKey_9490b716a4845258: function(arg0) {
            const ret = arg0.ctrlKey;
            return ret;
        },
        __wbg_currentTime_5594ee0e8ef1889a: function(arg0) {
            const ret = arg0.currentTime;
            return ret;
        },
        __wbg_destination_f6ba56e7f07829d0: function(arg0) {
            const ret = arg0.destination;
            return ret;
        },
        __wbg_document_ac38448dbfd31a57: function(arg0) {
            const ret = arg0.document;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_done_669171204c3dcae2: function(arg0) {
            const ret = arg0.done;
            return ret;
        },
        __wbg_entries_71601bcb707d5078: function(arg0) {
            const ret = arg0.entries();
            return ret;
        },
        __wbg_entries_7774d489e1da5f4f: function(arg0) {
            const ret = Object.entries(arg0);
            return ret;
        },
        __wbg_error_757e9472f8410341: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_error_dd408a7b3cb542dd: function(arg0) {
            console.error(arg0);
        },
        __wbg_exponentialRampToValueAtTime_a044f46fcc01ae76: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.exponentialRampToValueAtTime(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_files_56a897754f75826b: function(arg0) {
            const ret = arg0.files;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_fillRect_3077c0e38eb34cd1: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.fillRect(arg1, arg2, arg3, arg4);
        },
        __wbg_fillText_2ebd722b6f37129e: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.fillText(getStringFromWasm0(arg1, arg2), arg3, arg4);
        }, arguments); },
        __wbg_fill_33944400e9c94f79: function(arg0) {
            arg0.fill();
        },
        __wbg_frequency_3c22ce8926adb7fe: function(arg0) {
            const ret = arg0.frequency;
            return ret;
        },
        __wbg_frequency_aeb9bc548e7ee4e0: function(arg0) {
            const ret = arg0.frequency;
            return ret;
        },
        __wbg_gain_5d2286f1f903491e: function(arg0) {
            const ret = arg0.gain;
            return ret;
        },
        __wbg_getAttribute_4c6e1df05f9ee034: function(arg0, arg1, arg2, arg3) {
            const ret = arg1.getAttribute(getStringFromWasm0(arg2, arg3));
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_getContext_71c33f14b63da593: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getElementById_1637d6969b003cda: function(arg0, arg1, arg2) {
            const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_getNode_801fd54b8963fc67: function(arg0, arg1) {
            const ret = arg0.getNode(arg1 >>> 0);
            return ret;
        },
        __wbg_get_c0c8f8d7da0c03dd: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_get_d173c0308df22d37: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.get(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_get_select_data_113e0f4162f890d9: function(arg0, arg1) {
            const ret = get_select_data(arg1);
            const ptr1 = passArrayJsValueToWasm0(ret, wasm.__wbindgen_malloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_get_unchecked_e20b893aeafc3fca: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_height_e56f6fb197710e09: function(arg0) {
            const ret = arg0.height;
            return ret;
        },
        __wbg_initialize_d5a4d8f6624b5e27: function(arg0, arg1, arg2) {
            arg0.initialize(arg1, arg2);
        },
        __wbg_instanceof_ArrayBuffer_993d02d2d254cad1: function(arg0) {
            let result;
            try {
                result = arg0 instanceof ArrayBuffer;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_CanvasRenderingContext2d_d23139c3ef7651a3: function(arg0) {
            let result;
            try {
                result = arg0 instanceof CanvasRenderingContext2D;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Element_a3960bb00f4964bc: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Element;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlCanvasElement_327e7f7530c72bbd: function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLCanvasElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlElement_6b02a3740edba922: function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlFormElement_ab33e8c914cfe17d: function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLFormElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlInputElement_6077656bcaf1eb33: function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLInputElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlSelectElement_f94f3a0c638a54e1: function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLSelectElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlTextAreaElement_6d5fbbcef108f57a: function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLTextAreaElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Node_ad9597995317f467: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Node;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Uint8Array_f935dbb0aa7cdeed: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Uint8Array;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Window_5625ff9937037a38: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Window;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_isArray_6339f732981044bf: function(arg0) {
            const ret = Array.isArray(arg0);
            return ret;
        },
        __wbg_isSafeInteger_f3d6cd19ccfe4512: function(arg0) {
            const ret = Number.isSafeInteger(arg0);
            return ret;
        },
        __wbg_item_b5842778aa6f5277: function(arg0, arg1) {
            const ret = arg0.item(arg1 >>> 0);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_iterator_5cebbb86e33c6dd6: function() {
            const ret = Symbol.iterator;
            return ret;
        },
        __wbg_length_2dd58ff350b5afcd: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_length_36bd29c6848c2144: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_length_7afd83ae4ddf324f: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_length_ecfa2c63d3d0d82c: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_lineTo_9495a068a4f48283: function(arg0, arg1, arg2) {
            arg0.lineTo(arg1, arg2);
        },
        __wbg_linearRampToValueAtTime_f17b13391ccf4ef9: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.linearRampToValueAtTime(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_metaKey_f282cd52fbd7cb27: function(arg0) {
            const ret = arg0.metaKey;
            return ret;
        },
        __wbg_moveTo_a5882cdf1a7d39d9: function(arg0, arg1, arg2) {
            arg0.moveTo(arg1, arg2);
        },
        __wbg_name_41b795553ec88cd8: function(arg0, arg1) {
            const ret = arg1.name;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_new_02c96ecf32ea049f: function(arg0) {
            const ret = new RawInterpreter(arg0 >>> 0);
            return ret;
        },
        __wbg_new_032f5cf47e7b0cae: function() { return handleError(function () {
            const ret = new lAudioContext();
            return ret;
        }, arguments); },
        __wbg_new_116be93542d39019: function() {
            const ret = new Array();
            return ret;
        },
        __wbg_new_1e24d8c8254c847e: function(arg0) {
            const ret = new WebDioxusChannel(JSOwner.__wrap(arg0));
            return ret;
        },
        __wbg_new_1f27644530c822b2: function() { return handleError(function () {
            const ret = new FileReader();
            return ret;
        }, arguments); },
        __wbg_new_227d7c05414eb861: function() {
            const ret = new Error();
            return ret;
        },
        __wbg_new_77cc4f4f472aeb81: function(arg0) {
            const ret = new Uint8Array(arg0);
            return ret;
        },
        __wbg_new_cdf041679ded4c5f: function() {
            const ret = new Map();
            return ret;
        },
        __wbg_new_ebe3e0f6837f0879: function() {
            const ret = new Object();
            return ret;
        },
        __wbg_new_with_args_75f20e1087b74fa8: function(arg0, arg1, arg2, arg3) {
            const ret = new Function(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
            return ret;
        },
        __wbg_next_42cf16ee0dafc9e2: function() { return handleError(function (arg0) {
            const ret = arg0.next();
            return ret;
        }, arguments); },
        __wbg_next_8f26b64fa5e9f64b: function(arg0) {
            const ret = arg0.next;
            return ret;
        },
        __wbg_of_598c0ff0cd48a890: function(arg0, arg1) {
            const ret = Array.of(arg0, arg1);
            return ret;
        },
        __wbg_offsetX_2db1c144fa76228b: function(arg0) {
            const ret = arg0.offsetX;
            return ret;
        },
        __wbg_offsetY_b32f2328bb79e445: function(arg0) {
            const ret = arg0.offsetY;
            return ret;
        },
        __wbg_open_67cee4f3ea60a981: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            const ret = arg0.open(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_ownerDocument_82c473eb17b62fb0: function(arg0) {
            const ret = arg0.ownerDocument;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_pageX_9e121a228bc2b964: function(arg0) {
            const ret = arg0.pageX;
            return ret;
        },
        __wbg_pageY_9fcf5b857d758455: function(arg0) {
            const ret = arg0.pageY;
            return ret;
        },
        __wbg_parentElement_ef76606593484767: function(arg0) {
            const ret = arg0.parentElement;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_preventDefault_19878c58b8010668: function(arg0) {
            arg0.preventDefault();
        },
        __wbg_prototypesetcall_de8e0d9553586985: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
        },
        __wbg_queueMicrotask_ac694eae12e92dfb: function(arg0) {
            queueMicrotask(arg0);
        },
        __wbg_queueMicrotask_be5fe34a8f4cad4d: function(arg0) {
            const ret = arg0.queueMicrotask;
            return ret;
        },
        __wbg_readAsArrayBuffer_1e0bf6cd0613d7fd: function() { return handleError(function (arg0, arg1) {
            arg0.readAsArrayBuffer(arg1);
        }, arguments); },
        __wbg_readAsText_3990b1994faed1cb: function() { return handleError(function (arg0, arg1) {
            arg0.readAsText(arg1);
        }, arguments); },
        __wbg_resolve_020f95d838c6ef25: function(arg0) {
            const ret = Promise.resolve(arg0);
            return ret;
        },
        __wbg_restore_43a0248041b088b5: function(arg0) {
            arg0.restore();
        },
        __wbg_result_89c2bfc79be07ad2: function() { return handleError(function (arg0) {
            const ret = arg0.result;
            return ret;
        }, arguments); },
        __wbg_resume_d3c27715f0790def: function() { return handleError(function (arg0) {
            const ret = arg0.resume();
            return ret;
        }, arguments); },
        __wbg_run_69ad54aed7ee70e7: function(arg0) {
            arg0.run();
        },
        __wbg_rustRecv_28afa22ca4002e37: function(arg0) {
            const ret = arg0.rustRecv();
            return ret;
        },
        __wbg_rustSend_bac1c9286ac45ea8: function(arg0, arg1) {
            arg0.rustSend(arg1);
        },
        __wbg_saveTemplate_d0cf54a3999acf0e: function(arg0, arg1, arg2, arg3) {
            var v0 = getArrayJsValueFromWasm0(arg1, arg2);
            wasm.__wbindgen_free(arg1, arg2 * 4, 4);
            arg0.saveTemplate(v0, arg3);
        },
        __wbg_save_0c65dc2190a45c2a: function(arg0) {
            arg0.save();
        },
        __wbg_screenX_a5783b55bfd207a5: function(arg0) {
            const ret = arg0.screenX;
            return ret;
        },
        __wbg_screenY_7372f7b411f8b43b: function(arg0) {
            const ret = arg0.screenY;
            return ret;
        },
        __wbg_setAttributeInner_93b967de0652cce4: function(arg0, arg1, arg2, arg3, arg4, arg5) {
            setAttributeInner(arg0, getStringFromWasm0(arg1, arg2), arg3, arg4 === 0 ? undefined : getStringFromWasm0(arg4, arg5));
        },
        __wbg_setLineDash_d915b0269ee28de8: function() { return handleError(function (arg0, arg1) {
            arg0.setLineDash(arg1);
        }, arguments); },
        __wbg_setTimeout_ef24d2fc3ad97385: function() { return handleError(function (arg0, arg1) {
            const ret = setTimeout(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_setValueAtTime_b5ac53fd475d9953: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.setValueAtTime(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_set_014226dfeca53178: function(arg0, arg1, arg2) {
            const ret = arg0.set(arg1, arg2);
            return ret;
        },
        __wbg_set_a80955eb93b145c6: function(arg0, arg1, arg2) {
            arg0[arg1 >>> 0] = arg2;
        },
        __wbg_set_f071dbb3bd088e0e: function(arg0, arg1, arg2) {
            arg0[arg1] = arg2;
        },
        __wbg_set_fillStyle_52e75a25be60a3ff: function(arg0, arg1, arg2) {
            arg0.fillStyle = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_font_63f9cc44d4c6f102: function(arg0, arg1, arg2) {
            arg0.font = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_height_d72f2b76484a44de: function(arg0, arg1) {
            arg0.height = arg1 >>> 0;
        },
        __wbg_set_lineCap_ec484c1489fa48bc: function(arg0, arg1, arg2) {
            arg0.lineCap = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_lineJoin_645744ec04386dd0: function(arg0, arg1, arg2) {
            arg0.lineJoin = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_lineWidth_5f9aefcc32e60287: function(arg0, arg1) {
            arg0.lineWidth = arg1;
        },
        __wbg_set_onload_a82519c1b28925a3: function(arg0, arg1) {
            arg0.onload = arg1;
        },
        __wbg_set_shadowBlur_8f0ba721d1bde0ba: function(arg0, arg1) {
            arg0.shadowBlur = arg1;
        },
        __wbg_set_shadowColor_b6af7ba363af9d9a: function(arg0, arg1, arg2) {
            arg0.shadowColor = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_strokeStyle_cce50c69cecc2df7: function(arg0, arg1, arg2) {
            arg0.strokeStyle = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_textAlign_9ee229a431a30197: function(arg0, arg1, arg2) {
            arg0.textAlign = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_textBaseline_72fc99fa97c6b6f3: function(arg0, arg1, arg2) {
            arg0.textBaseline = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_type_14d5b97128f1195a: function(arg0, arg1) {
            arg0.type = __wbindgen_enum_OscillatorType[arg1];
        },
        __wbg_set_type_d562e549e7af23a7: function(arg0, arg1) {
            arg0.type = __wbindgen_enum_BiquadFilterType[arg1];
        },
        __wbg_set_value_6d46c7f2499ffadd: function(arg0, arg1) {
            arg0.value = arg1;
        },
        __wbg_set_width_36ef6630b22fc519: function(arg0, arg1) {
            arg0.width = arg1 >>> 0;
        },
        __wbg_shiftKey_d24455602deb3490: function(arg0) {
            const ret = arg0.shiftKey;
            return ret;
        },
        __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_start_152ac39aaeb7a33e: function() { return handleError(function (arg0, arg1) {
            arg0.start(arg1);
        }, arguments); },
        __wbg_static_accessor_GLOBAL_THIS_466428f93b4eaa76: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_c7aea38d4de089bc: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_42d4fae05e59267a: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_e0db14a0eba6a812: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_stop_167c02bd39350a5e: function() { return handleError(function (arg0, arg1) {
            arg0.stop(arg1);
        }, arguments); },
        __wbg_stringify_f93a4ebae9231922: function() { return handleError(function (arg0) {
            const ret = JSON.stringify(arg0);
            return ret;
        }, arguments); },
        __wbg_stroke_5f311844f0db0d9a: function(arg0) {
            arg0.stroke();
        },
        __wbg_target_13424fe1cdc436ac: function(arg0) {
            const ret = arg0.target;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_textContent_a8ab419abd77b63c: function(arg0, arg1) {
            const ret = arg1.textContent;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_then_7026b513a94278a8: function(arg0, arg1) {
            const ret = arg0.then(arg1);
            return ret;
        },
        __wbg_then_72819b8d4e081fb5: function(arg0, arg1, arg2) {
            const ret = arg0.then(arg1, arg2);
            return ret;
        },
        __wbg_toggleAttribute_fef3034dd01db867: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.toggleAttribute(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_type_69f042676195fffa: function(arg0, arg1) {
            const ret = arg1.type;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_type_93f0d0fe5e0ba871: function(arg0, arg1) {
            const ret = arg1.type;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_update_memory_8ede258c403e8ad4: function(arg0, arg1) {
            arg0.update_memory(arg1);
        },
        __wbg_value_1e2369fab29b420e: function(arg0) {
            const ret = arg0.value;
            return ret;
        },
        __wbg_value_35f0fb42e7c3d468: function(arg0, arg1) {
            const ret = arg1.value;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_value_75dd6140b2a4f88b: function(arg0, arg1) {
            const ret = arg1.value;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_value_ea3f13bcabcbe7ca: function(arg0, arg1) {
            const ret = arg1.value;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_weak_9ab9e5b213495c90: function(arg0) {
            const ret = arg0.weak();
            return ret;
        },
        __wbg_width_1952934caca67137: function(arg0) {
            const ret = arg0.width;
            return ret;
        },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 33, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_381fc749d335bd54___convert__closures_____invoke___wasm_bindgen_381fc749d335bd54___JsValue__core_ed718c3d60ebd546___result__Result_____wasm_bindgen_381fc749d335bd54___JsError___true_);
            return ret;
        },
        __wbindgen_cast_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Ref(NamedExternref("Event"))], shim_idx: 25, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_381fc749d335bd54___convert__closures________invoke___web_sys_a7fed436ea7fda92___features__gen_Event__Event______true_);
            return ret;
        },
        __wbindgen_cast_0000000000000003: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 6, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_381fc749d335bd54___convert__closures_____invoke_______true_);
            return ret;
        },
        __wbindgen_cast_0000000000000004: function(arg0) {
            // Cast intrinsic for `F64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_cast_0000000000000005: function(arg0) {
            // Cast intrinsic for `I64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_cast_0000000000000006: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_0000000000000007: function(arg0) {
            // Cast intrinsic for `U64 -> Externref`.
            const ret = BigInt.asUintN(64, arg0);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./ui_bg.js": import0,
        "./snippets/dioxus-web-10186f9fcc0b4418/inline1.js": import1,
    };
}

const lAudioContext = (typeof AudioContext !== 'undefined' ? AudioContext : (typeof webkitAudioContext !== 'undefined' ? webkitAudioContext : undefined));
function wasm_bindgen_381fc749d335bd54___convert__closures_____invoke_______true_(arg0, arg1) {
    wasm.wasm_bindgen_381fc749d335bd54___convert__closures_____invoke_______true_(arg0, arg1);
}

function wasm_bindgen_381fc749d335bd54___convert__closures________invoke___web_sys_a7fed436ea7fda92___features__gen_Event__Event______true_(arg0, arg1, arg2) {
    wasm.wasm_bindgen_381fc749d335bd54___convert__closures________invoke___web_sys_a7fed436ea7fda92___features__gen_Event__Event______true_(arg0, arg1, arg2);
}

function wasm_bindgen_381fc749d335bd54___convert__closures_____invoke___wasm_bindgen_381fc749d335bd54___JsValue__core_ed718c3d60ebd546___result__Result_____wasm_bindgen_381fc749d335bd54___JsError___true_(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_381fc749d335bd54___convert__closures_____invoke___wasm_bindgen_381fc749d335bd54___JsValue__core_ed718c3d60ebd546___result__Result_____wasm_bindgen_381fc749d335bd54___JsError___true_(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}


const __wbindgen_enum_BiquadFilterType = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"];


const __wbindgen_enum_OscillatorType = ["sine", "square", "sawtooth", "triangle", "custom"];
const HeartSystemFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_heartsystem_free(ptr, 1));
const HudMetricsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_hudmetrics_free(ptr, 1));
const JSOwnerFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_jsowner_free(ptr, 1));
const PharmacoFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_pharmaco_free(ptr, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => wasm.__wbindgen_destroy_closure(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayF64FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat64ArrayMemory0().subarray(ptr / 8, ptr / 8 + len);
}

function getArrayJsValueFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getDataViewMemory0();
    const result = [];
    for (let i = ptr; i < ptr + 4 * len; i += 4) {
        result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
    }
    wasm.__externref_drop_slice(ptr, len);
    return result;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

let cachedFloat64ArrayMemory0 = null;
function getFloat64ArrayMemory0() {
    if (cachedFloat64ArrayMemory0 === null || cachedFloat64ArrayMemory0.byteLength === 0) {
        cachedFloat64ArrayMemory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_destroy_closure(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4, 4) >>> 0;
    for (let i = 0; i < array.length; i++) {
        const add = addToExternrefTable0(array[i]);
        getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedFloat64ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (!module.ok) {
            throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
        }

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('ui_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
