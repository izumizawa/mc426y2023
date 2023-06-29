export const validateEmail = (email) => email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

export const formatAddress = (addressObject) => {
    const { address, addressCity, addressNumber, addressState, zipCode } = addressObject;

    return `${address} ${addressNumber}, ${addressCity} - ${addressState} - ${zipCode}`
}
