import 'v5w-style/css/style.css'
import './css/base.css'
import app from './app'



const div=document.createElement('div')
div.id='panel'
document.body.appendChild(div)

const canvas =new app('canvas','panel')

