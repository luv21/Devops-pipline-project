# Checkpoint 1

## Process flow and Software practices

For this milestone we implemented the basic flow described by the project. For implementing the basic flow our team used well known Software Practices. As our general Software Process, we have used "scrumban" methodology. As a part of Core Practice, we are using Code Review While following these practices we kept the meeting notes and the documentation of these practices.


## pipeline setup

We have provided a CLI command `pipeline setup` which performs the following tasks and also implemented the below steps for the fullfillment of the Milestone-1
* Ansible role has been created for configuring Jenkins server at IP - 192.168.33.20
* Jenkins inventory file located at `inventory.ini` used by ansible server
* Default password will be used to decrypt the .yml files which are encrypted by ansible vault using password file
* Templates are been used to skip the setup wizard and handle authentication



#

# Scrum Meeting 1 - Date: 02/13/2020

### Luv Khurana

#### Tasks:

* Update source list and repo key
* Cheking up proper permissions for the config files
* Update documentation

### Venkata Sai

#### Tasks

* Vault - Pass username, password, and vault-password in setup.js file
* Handling authentication for jenkins
* Run Jenkins on Port 9000 and installing plugins


### Jayesh

#### Tasks  

* Create infrastructure - ansible and Jenkins server
* Setting up Jenkins Setup wizard
* Modify package.json, inventory file for ansible server


# Checkpoint-2

## Process flow and Software practices

In this milestone we created the build environment for checkbox.io. The production site has dependencies on nginx, node, monogodb, and additional environmental variable dependencies. In this checkpoint we implemented a subset of these dependencies.


The steps that we performed in the Checkpoint-2  are:

* Installed Mongodb  with configuration enhancement. Settings up Mongodb database for configuring build environment.

* Created mongo user with password and readWrite role. We also defined the port for Mongodb

* Installed nodejs and other variable dependencies like nginx.


# Scrum Meeting 2 - Date: 02/20/2020

### Luv Khurana

#### Tasks:

* Installed nodejs
* Update documentation and Readme

### Venkata Sai

#### Tasks

* Created mongo user with password and readWrite role
* Changing ports for Mongodb



### Jayesh

#### Tasks  

* Installed Mongodb and other environment variables.
* Updated source list and enabling Mongodb services.











