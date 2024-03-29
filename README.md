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

### Authentication:
- Users can securely log in using MSAL ([Microsoft Authentication Library](https://learn.microsoft.com/en-us/entra/identity-platform/msal-overview)).
  
### Admin Features:
- Admins have the capability to upload files. These files become available for all users to view and download, facilitating easy sharing and access to resources.

### General User Features:
- Both admins and users have access to calculator features, providing essential tools directly within the application.


## Demo of RSDE Portal
> [!IMPORTANT]
> `demo-branch` does not have all functionalities of `Production`. However examples below will mimick `Production` scenarios. 


### Authentication

Users are able to log in using the company's Microsoft account which will also differentiate between an Admin or General User.[^1]

### Admin Features


The Admin is able to upload files onto the portal for all other users and admins to view.[^2]

### Calculator

There are currently two calculators, this is the same on `Production`. However there are plans to add other calculators for the RSDE Staff members.

### Form Validations

- **Not all Values are present**

  The Calculate Button remains Grey and unable to calculate.

  <details>
  <summary>View Screenshot</summary>
  <br>
  <img src="https://github.com/caizhitan/RSDE_FE_Demo/assets/150103035/dcfd3f03-2bd4-4a2c-b9bf-21ad9f1c1f05" width="250" alt="IMG_2428">
  </details>

- **All Values are present**

  The Calculate Button will turn Grey -> Blue and be able to calculate.

  <details>
  <summary>View Screenshot</summary>
  <br>
  <img src="https://github.com/caizhitan/RSDE_FE_Demo/assets/150103035/ba7b538b-478c-4f08-b58d-6c934afb8cf3" width="250" alt="IMG_2426">
  </details>

- **Alphabetical Values**

  The input field will prompt the user to enter a numerical value.

  <details>
  <summary>View Screenshot</summary>
  <br>
  <img src="https://github.com/caizhitan/RSDE_FE_Demo/assets/150103035/996c7642-e916-4091-9fde-2839fc001d6c" width="250" alt="IMG_2427">
  </details>


[^1]: There is no user authentication for this `demo-branch`.
[^2]: Files do not upload to LTA's AWS S3 Bucket unlike the `Production` branch.
