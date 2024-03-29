# RSDE Portal

This Portal contains 2 components.

- File Viewer
- Calculators

## About the Project

This project was designed for LTA RSDE Staff be able to view and manage files and calculate values on their mobile devices as connecting to the intranet with government issued laptops can be slow.

###  System Architecture
<img width="1468" alt="image" src="https://github.com/caizhitan/RSDE_FE_Demo/assets/150103035/b6d1467d-3f3c-4f01-9da1-984e13bce45a">

###  System Flow
<img width="1388" alt="image-1" src="https://github.com/caizhitan/RSDE_FE_Demo/assets/150103035/286f7277-5a6c-48fe-88ea-cba168da4a1f">

### File Class Diagram
<img width="570" alt="image-2" src="https://github.com/caizhitan/RSDE_FE_Demo/assets/150103035/edd70f26-7e98-483b-b6e5-7cd6af9b39bb">

Our Front-End is built using TypeScript & React. With Sequalize an Object-Relational Mapping (ORM) library to manage our Back-End databases such as PostgreSQL. 

## Functionality





## Demo of RSDE Portal
> [!IMPORTANT]
> This is a `demo-branch` so it does not have all features/functionalities from Production. 

### File Viewer
The Admin is able to upload files onto the portal for all other users and admins to view[^1].

### Calculator



[^1]: File Viewer works however it does not upload to AWS S3 Bucket like the Production branch.
