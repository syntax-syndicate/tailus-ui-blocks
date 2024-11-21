import { Popover } from '@flexilla/popover'

new Popover('#demo-popover', {
    offsetDistance: 8,
    placement: 'bottom-middle',
    onShow: () => {
        document.documentElement.classList.add('overflow-hidden')
    },
    onHide: () => {
        document.documentElement.classList.remove('overflow-hidden')
    },
})
