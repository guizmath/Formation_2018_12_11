import $ from 'jquery'
import 'bootstrap'
import { Clock } from './clock'

// C'est cet import qui lance l'ajout de la balise <style type="text/css">
import './style.scss'

var $mainBtn = $('#main-btn')

$mainBtn.tooltip({
    title: 'Click me !',
    placement: 'right',
})

document.addEventListener('click', () => {
    import('./clock').then(({ Clock }) => {
        const clockElt = document.querySelector('#clock')
        const clock = new Clock({
            container: clockElt,
        })
        clock.start()
    })
})
