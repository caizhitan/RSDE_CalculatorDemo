# RSDE Portal Frontend

This Portal contains 2 components.

- File Viewer
- Calculators

## Functionality

### Authentication:
- Users can securely log in using MSAL ([Microsoft Authentication Library](https://learn.microsoft.com/en-us/entra/identity-platform/msal-overview)).
  
### Admin Features:
- Admins have the capability to upload files. These files become available for all users to view and download, facilitating easy sharing and access to resources.

### General User Features:
- Both admins and users have access to calculator features, providing essential tools directly within the application.


## Pages of RSDE Portal
> [!NOTE]
> `demo-branch` does not contain all features. However examples below will try to mimick `Production` branch. 


### Authentication

Users are able to log in using the company's Microsoft account which will also differentiate between an Admin or General User.[^1]

### Admin Features


The Admin is able to upload files onto the portal for all other users and admins to view.[^2]

### Burger Menu

- **Navigation of Pages**
  
  <details>
  <summary>View Screenshot</summary>
  <br>
  <img src="https://github.com/caizhitan/RSDE_Demo_FE/assets/150103035/2b80f41d-2de0-4850-9a91-f136f869ae92" width="250" alt="IMG_2447">
  </details>


### Calculator

### RS Centre End Throw Calculator

- **Calculator User Interface**
  <details>
  <summary>View Screenshot</summary>
  <br>
  <img src="https://github.com/caizhitan/RSDE_Demo_FE/assets/150103035/1332d1b7-6f1e-446c-b0d3-50176d422da7" width="250" alt="IMG_2441">
  </details>

- **User Guide Modal**

  <details>
  <summary>View Screenshot</summary>
  <br>
  <img src="https://github.com/caizhitan/RSDE_Demo_FE/assets/150103035/947f837a-0be5-4fe8-865f-52838101eefb" width="250" alt="IMG_2448">
  </details>


### RS Centre Over Turning Calculator**

- **Calculator User Interface
  <details>
  <summary>View Screenshot</summary>
  <br>
  <img src="https://github.com/caizhitan/RSDE_Demo_FE/assets/150103035/95953bb4-a3c7-4d37-840c-286c5a264a41" width="250" alt="IMG_2442">
  </details>

- **User Guide Modal**

  <details>
  <summary>View Screenshot</summary>
  <br>
  <img src="https://github.com/caizhitan/RSDE_Demo_FE/assets/150103035/f4c87452-80ef-4c51-bd2c-59a159750b5f" width="250" alt="IMG_2449">
  </details>

  
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

### 404 Error Page

- **Page does not exist**

  The portal will present 404 Error Page.

  
  <details>
  <summary>View Screenshot</summary>
  <br>
  <img src="https://github.com/caizhitan/RSDE_Demo_FE/assets/150103035/9bcd33c4-cafa-496c-acab-c3153bacc958" width="250" alt="IMG_2500">
  </details>

![IMG_2443](https://github.com/caizhitan/RSDE_Demo_FE/assets/150103035/041d8f40-f385-4253-a691-58dd89cbcbb8)
![IMG_2444](https://github.com/caizhitan/RSDE_Demo_FE/assets/150103035/ed153270-f024-41ac-a255-61dda436e088)
![IMG_2445](https://github.com/caizhitan/RSDE_Demo_FE/assets/150103035/0742d54b-021f-4d0d-9dd0-880dd9e2192d)
![IMG_2446](https://github.com/caizhitan/RSDE_Demo_FE/assets/150103035/28e79b22-e181-4f84-9153-276486cd4071)





[^1]: There is no user authentication for this `demo-branch`.
[^2]: Files do not upload to LTA's AWS S3 Bucket unlike the `Production` branch.
