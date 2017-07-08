<template>
  <div role="dialog" :class="['modal',effect]" @click="backdrop&&action(false,1)" @transitionend="transition = false">
    <div :class="['modal-dialog',{'modal-lg':large,'modal-sm':small}]" role="document" @click.stop="action(null)">
      <div class="modal-content">
        <slot name="modal-header">
          <div class="modal-header">
            <button type="button" class="close" @click="action(false,2)"><span>&times;</span></button>
            <h4 class="modal-title"><slot name="title">{{title}}</slot></h4>
          </div>
        </slot>
        <slot name="modal-body"><div class="modal-body"><slot></slot></div></slot>
        <slot name="modal-footer">
          <div class="modal-footer">
            <button type="button" class="btn btn-default" @click="action(false,3)">{{ cancelText }}</button>
            <button type="button" class="btn btn-primary" @click="action(true,4)">{{ okText }}</button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
function getScrollBarWidth () {
  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
    return 0
  }
  let inner = document.createElement('p')
  inner.style.width = '100%'
  inner.style.height = '200px'

  let outer = document.createElement('div')
  outer.style.position = 'absolute'
  outer.style.top = '0px'
  outer.style.left = '0px'
  outer.style.visibility = 'hidden'
  outer.style.width = '200px'
  outer.style.height = '150px'
  outer.style.overflow = 'hidden'
  outer.appendChild(inner)

  document.body.appendChild(outer)
  let w1 = inner.offsetWidth
  outer.style.overflow = 'scroll'
  let w2 = inner.offsetWidth
  if (w1 === w2) w2 = outer.clientWidth

  document.body.removeChild(outer)

  return (w1 - w2)
}

export default {
  props: {
    backdrop: {type: Boolean, default: true},
    callback: {type: Function, default: null},
    cancelText: {type: String, default: 'Close'},
    effect: {type: String, default: null},
    large: {type: Boolean, default: false},
    okText: {type: String, default: 'Save changes'},
    small: {type: Boolean, default: false},
    title: {type: String, default: ''},
    value: {type: Boolean, required: true}
  },
  data () {
    return {
      transition: false,
      val: null
    }
  },
  watch: {
    transition (val, old) {
      if (val === old) { return }
      const el = this.$el
      const body = document.body
      if (val) {//starting
        if (this.val) {
          el.querySelector('.modal-content').focus()
          el.style.display = 'block'
          setTimeout(() => el.classList.add('in'), 0)
          body.classList.add('modal-open')
          if (getScrollBarWidth() !== 0) {
            body.style.paddingRight = getScrollBarWidth() + 'px'
          }
        } else {
          el.classList.remove('in')
        }
      } else {//ending
        this.$emit(this.val ? 'opened' : 'closed')
        if (!this.val) {
          el.style.display = 'none'
          body.style.paddingRight = null
          body.classList.remove('modal-open')
        }
      }
    },
    val (val, old) {
      this.$emit('input', val)
      if (old === null ? val === true : val !== old) this.transition = true
    },
    value (val, old) {
      if (val !== old) this.val = val
    }
  },
  methods: {
    action (val,p) {
      if (val === null) { return }
      if (val && this.callback instanceof Function) this.callback()
      this.$emit(val ? 'ok' : 'cancel',p)
      this.val = val || false
    }
  },
  mounted () {
    this.val = this.value
  }
}
</script>
<style>
.modal {
  transition: all 0.3s ease;
}
.modal.in {
  background-color: rgba(0,0,0,0.5);
}
.modal.zoom .modal-dialog {
  transform: scale(0.1);
  top: 300px;
  opacity: 0;
  transition: all 0.3s;
}
.modal.zoom.in .modal-dialog {
  transform: scale(1);
  transform: translate3d(0, -300px, 0);
  opacity: 1;
}
</style>
