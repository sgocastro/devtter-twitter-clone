import css from 'styled-jsx/css'
import { colors, fonts } from './theme'
import { addOpacityColor } from '../utils/styles-helper'

const backgroundColor = addOpacityColor(colors.black, 0.5)

export default css.global`
    html, body{
        padding: 0;
        margin: 0;
        font-family: ${fonts.base};
        background-image:
            radial-gradient(${backgroundColor} 1px, transparent 1px),
            radial-gradient(${backgroundColor} 1px, transparent 1px);
        background-position: 0 0, 25px 25px;
        background-size: 50px 50px;
        overflow: none;
    }
    
    * {
        box-sizing: border-box;
    }
`