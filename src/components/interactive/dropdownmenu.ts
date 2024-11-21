import { Dropdown } from '@flexilla/dropdown'

new Dropdown('#myDropdown', {
    offsetDistance: 8,
    placement: 'bottom-middle',
    onShow: () => {
        document.documentElement.classList.add('overflow-hidden')
    },
    onHide: () => {
        document.documentElement.classList.remove('overflow-hidden')
    },
})
