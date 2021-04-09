import React from 'react'
import { radius, colors } from "../../data/global"

export default function Input({ dark, placeHolder }) {
    const inputStyling = (dark) ?
        { borderRadius: radius, color: colors.dark.text, backgroundColor: colors.dark.input, border: '1px solid #36383D' }
        :
        { borderRadius: radius, color: colors.light.text, backgroundColor: colors.light.input };
    return <input placeholder={placeHolder} style={inputStyling} type="text" />
}