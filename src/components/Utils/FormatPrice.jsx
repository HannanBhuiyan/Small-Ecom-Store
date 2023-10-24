const FormatPrict = ({price}) => {
    return new Intl.NumberFormat('bn-BD', 
    { 
        style: 'currency', 
        currency: 'BDT',
        maximumFractionDigits: 2, 
        maximumSignificantDigits:5
    }
    ).format(price / 100)
}

export default FormatPrict