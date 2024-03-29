# RSDE Portal

This Portal contains 2 components.

- File Viewer
- Calculators

## About the Project

This project was designed for LTA RSDE Staff be able to view and manage files and calculate values on their mobile devices as connecting to the intranet with government issued laptops can be slow.

###  System Architecture

![System-Architecture](image.png)

###  System Flow
![System-Flow](image-1.png)


### File Class Diagram
![File-Class-Diagram](image-2.png)

Our Front-End is built using TypeScript & React. With Sequalize an Object-Relational Mapping (ORM) library to manage our Back-End databases such as PostgreSQL. 

## Functionality
The user will login using MSAL Authentication. 

Depending on their Admin status, they will have additional permissions to Upload/Delete Files for the File Viewer Page.

The user can view/download the files from the File Viewer Page.

The user can use the 2 calculators for their calculation requirements.

## Demo of RSDE Portal
> [!NOTE]
> This repository is a demo branch from production and does not have all features/functionalities.

### File Viewer

### Calculator
