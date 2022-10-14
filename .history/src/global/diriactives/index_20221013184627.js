export default function (app) {
  app.directive('focus', {
    created(el, binding, vnode, prevVnode) {},
    beforeMount(el, binding, vnode, prevVnode) {
      console.log('在元素被插入到 DOM 前调用');
    },
    mounted(el, binding, vnode, prevVnode) {},
    beforeUpdate(el, binding, vnode, prevVnode) {},
    updated(el, binding, vnode, prevVnode) {},
    beforeUnmount(el, binding, vnode, prevVnode) {},
    unmounted(el, binding, vnode, prevVnode) {},
  });
}
