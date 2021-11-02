import qrcode from 'qrcode';
import otplib from 'otplib';

const { authenticator } = otplib;

const genderateUniqueSecret = () => {
    return authenticator.generateSecret()
}

const generateOTPTocken = (username, servicename, secret) => {
    return authenticator.keyuri(username, serviceName, secret)
}

const verifyOTPToken = (token, secret) => {
    return authenticator.verify({token, secret})
}

const generateQRCode = async (otpAuth) => {
    try {
        const QRCodeImageUrl = await qrcode.toDataURL(otpAuth)
        retrun `<img src='${QRCodeImageUrl}' alt='qr-code-img' />`
    } catch(error) {
        console.log('Could not generate QR Code', error)
    }
}

export {
    genderateUniqueSecret, 
    verifyOTPToken, 
    generateQRCode,
    generateOTPTocken
}