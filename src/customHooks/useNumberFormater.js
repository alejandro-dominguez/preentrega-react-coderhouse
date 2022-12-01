const useNumberFormater = (number) => {
    return new Intl.NumberFormat(
        "ES-AR",
        {
        style: "currency",
        currency: "ARS"
        }).format(number)
}

export default useNumberFormater;