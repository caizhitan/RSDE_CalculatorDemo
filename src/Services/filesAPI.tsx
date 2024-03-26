import axios from "axios"
import env from '../env';

const homeIP = env.REACT_APP_IP;

export const GetAllFiles = async() => {
    return axios.get(homeIP+'/files')
    .then(function(res) {
        const result = res.data.data;
        return result;
    })
    .catch(error => error)
    .finally(function() {
        "No Data Found"
    })
}

export const GetPaginatedFiles = async(page:number, perPage:number) =>{

    return axios.get(homeIP+'/files?', {
        params: {
            Page: page,
            perPage: perPage
        }
    }).then(function(res) {
        const result = res.data.data;
        //console.log(JSON.parse(result));
        return result;
    }
    ).catch(error => error
    ).finally(function () {
        "No Data Found"
    })

}

export const InsertFile = (fileType:string, fileName:string, fileUrl: string) => {
    return axios.post(homeIP+'/files/upload', null, { params: {
        fileType: fileType,
        fileName: fileName,
        fileUrl: fileUrl
    }}).then(function(res) {
        return res;})
    .catch(function(err) {
        return err;})
}

export const DeleteFile = (fileID: string) => {
    return axios.post(homeIP+'/files/delete', null, {params: {
        fileID: fileID
    }}).then(res => console.log(res))
    .catch(err => console.log(err))
}

export const FilteredFile = (fileType: string) => {
    return axios.get(homeIP+'/files/filtered', {params: {
        fileType: fileType
    }}).then(function(res) {
        const result = res.data.data;
        return result;
    })
    .catch(error => error)
    .finally(function() {
        "No Data Found"
    })
}

export const GetSignedUrl = async(fileName: string) => {
    console.log(fileName)
    return axios.get(homeIP+'/files/s3Url', {params:{
        fileName: fileName
    }}).then(function(res){
        const url = res.data.url;
        console.log(url)
        return url;
    })
}

export const openFile = async(fileName: string) => {
    return axios.get(homeIP+'/files/signedUrl', {params:{
        fileName: fileName
    }}).then(function(res) {
        const url = res.data.url;
        console.log(url)
        return url;
    })
}

export const deleteS3 = async(fileName: string) => {
    return axios.post(homeIP+'/files/deleteS3File', null, {params:{
        fileName: fileName
    }}).then(function(res){
        console.log(res)
    })
    .catch(err => console.log(err))
}