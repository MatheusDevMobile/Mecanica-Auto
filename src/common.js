import { Alert } from 'react-native'
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.33:3000'
});

const showError = (err) => {
    Alert.alert('Error!', `Message: ${err}`)
}

const showSuccess = (msg) => {
    Alert.alert('Success!', `Message ${msg}`)
}

export {api, showError, showSuccess}