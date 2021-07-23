import css from 'styled-jsx/css'
import { addOpacityColor } from '../utils/styles-helper'
import { colors } from './theme'

const boxShadowColor = addOpacityColor(colors.black, 0.1)

export default css`
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        background-color: ${colors.default};
        height: 90vh;
        width: 70vh;
        border-radius: 10px;
        box-shadow: 0 10px 25px ${boxShadowColor};
    }

    main{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .AppLayout_header {
        position: relative;
        top: 0;
        background-color: ${colors.primary};
        border-radius: 10px 10px 0px 0px;
        width: 100%;
    }

    .AppLayout_footer {
        position: relative;
        bottom: 0;
        background-color: ${colors.primary};
        border-radius: 0px 0px 10px 10px;
        width: 100%;
    }

`