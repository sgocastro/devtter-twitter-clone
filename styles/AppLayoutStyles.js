import css from 'styled-jsx/css'
import { addOpacityColor } from '../utils/styles-helper'
import { breakpoints, colors } from './theme'

const boxShadowColor = addOpacityColor(colors.black, 0.1)

export default css`
    div {
        display: grid;
        place-items: center;
        height: 100vh;
        width: 100%;
    }

    main {
        background-color: ${colors.default};
        box-shadow: 0 10px 25px ${boxShadowColor};
        border-radius: 10px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-content: space-between;
        flex-direction: column;
    }
    
    section {
        width: 100%;
        position: relative;
        background-color: #FFF;
    }

    .AppLayout_header {
        top:0;
        border-radius: 10px 10px 0px 0px;
        box-shadow: 0px 12px 22px -27px rgba(0,0,0,1);
    }

    .AppLayout_footer {
        bottom: 0;
        border-radius: 0px 0px 10px 10px;
    }

    .AppLayout_footter--hide{
        display: none;
    }

    @media (min-width: ${breakpoints.mobile}){
        main {
            width: ${breakpoints.mobile};
            height: 90vh;
        }

        div {
            place-content: center;
            height: 100vh;
        }
    }
`