import React from 'react'
import { colors } from "../../data/list"

export default function Input(props) {
    const inputStyling = (props.dark) ? { color: colors.primaryLight, background: colors.primaryDark } : { color: colors.textLight };

    return <input placeholder="+1" style={inputStyling} type="text" />
}