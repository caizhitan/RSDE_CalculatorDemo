import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import env from '../env'
const input = {
    "Bucket" : "rsde-dtt-lta-tp",
    "Key" : "Depot Summary_Amended.xlsx"
};

const AccessKeyId = env.REACT_APP_AccessKeyId,
      SecretKey = env.REACT_APP_SecretKey;

const creds = {
    accessKeyId: AccessKeyId,
    secretAccessKey: SecretKey,
};

const config = {
    "region" : "ap-southeast-1",
    "credentials" : creds,
}

const client = new S3Client(config);

export const main = async() =>{
    const command = new GetObjectCommand(input);
    const response = await client.send(command);
    return response;
};

export const PutFile = async(url: string, file: File) =>{
    await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: file
      })
}