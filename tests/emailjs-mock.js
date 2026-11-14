export const delivery = {
  calls: [], pending: null,
  reset() { this.calls = []; this.pending = null },
}
export default {
  send(...args) {
    delivery.calls.push(args)
    return new Promise((resolve, reject) => { delivery.pending = { resolve, reject } })
  },
}
