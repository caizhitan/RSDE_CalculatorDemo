import { cleanEnv, str} from 'envalid';

const env = cleanEnv(process.env, {
    REACT_APP_CLIENTID: str(),
    REACT_APP_MSAL_AUTHORITY: str(),
    REACT_APP_REDIRECT: str(),
    REACT_APP_LOGINSCOPE: str(),
    REACT_APP_USER: str(),
    REACT_APP_ADMIN: str(),
    REACT_APP_S3_BUCKET_LINK: str(),
    REACT_APP_IP: str(),
    REACT_APP_AccessKeyId: str(),
    REACT_APP_SecretKey: str(),
})

export default env;