# Milestone 1

## Process flow and Software practices

For this milestone we implemented the basic flow described by the project. For implementing the basic flow our team used well known Software Practices. As our general Software Process, we have used "scrumban" methodology. As a part of Core Practice, we are using Code Review While following these practices we kept the meeting notes and the documentation of these practices.


## pipeline setup

We have provided a CLI command `pipeline setup` which performs the following tasks and also implemented the below steps for the fullfillment of the Milestone-1
* Ansible role has been created for configuring Jenkins server at IP - 192.168.33.20
* Jenkins inventory file located at `inventory.ini` used by ansible server
* Default password will be used to decrypt the .yml files which are encrypted by ansible vault using password file
* Templates are been used to skip the setup wizard and handle authentication



# User Stories

| Milestone | Issue Number | Issue Name                                                | Task                                                                  | Created/Updated | Estimate | Assignees         | Completed   |
|-----------|--------------|-----------------------------------------------------------|-----------------------------------------------------------------------|-----------------|----------|-------------------|-------------|
| 1         | 1            | Setting up 'pipeline setup' CLI command                   | Modify package.json                                                   | 13 Feb 2020     | 4        | sjbondu           | Completed   |
|           |              |                                                           | Enable command pipeline setup                                         |                 |          |                   |             |
|           |              |                                                           | Create Ansible and Jenkins servers                                    |                 |          |                   |             |
|           |              |                                                           | Fix the Jenkins server IP                                             |                 |          |                   |             |
|           |              |                                                           |                                                                       |                 |          |                   |             |
| 1         | 2            | Ansible role to update jenkins serve                      | Add repo key                                                          | 13 Feb 2020     | 2        | lkhuran           | Completed   |
|           |              |                                                           | update source.list                                                    |                 |          |                   |             |
|           |              |                                                           |                                                                       |                 |          |                   |             |
| 1         | 3            | Configuring Jenkins server                                | Pass username, password, and vault-password in setup.js file.         | 14 Feb 2020     | 5        | vpmaddur          | In Progress |
|           |              |                                                           | Modify run-ansible.sh and setup.js to accept arguments from the user. |                 |          |                   |             |
|           |              |                                                           | Run Jenkins on Port 9000                                              |                 |          |                   |             |
|           |              |                                                           | Handling authentication                                               |                 |          |                   |             |
|           |              |                                                           | Installing plugins                                                    | 14 Feb 2020     |          |                   |             |
|           |              |                                                           |                                                                       |                 |          |                   |             |
| 1         | 4            | Infra Documentation                                       |                                                                       | 14 Feb 2020     | 1        | sjbondu, vpmaddur | In Progress |
|           |              |                                                           |                                                                       |                 |          |                   |             |
| 1         | 5            | Jenkins setup wizard                                      | Setting up Jenkins Setup wizard                                       | 13 Feb 2020     | 1        | sjbondu           | Closed      |
|           |              |                                                           |                                                                       |                 |          |                   |             |
| 1         | 6            | Resolving File Permission Issue for Ansible Playbook      | Resolving user permission issues                                      | 18 Feb 2020     | 1        | lkhuran           | Completed   |
|           |              |                                                           |                                                                       |                 |          |                   |             |
| 2         | 7            | Installing Mongodb - configuration enhancement            | Settings up Mongodb database for configuring build environment        | 19 Feb 2020     | 1        |                   | In Progress |
|           |              |                                                           |                                                                       |                 |          |                   |             |
| 2         | 8            | Create mongo user with password and readWrite role. Build | Create mongo user with password and readWrite role.                   | 19 Feb 2020     | 2        |                   | In Progress |
|           |              |                                                           | Define mongo port                                                     |                 |          |                   |             |
|           |              |                                                           |                                                                       |                 |          |                   |             |
| 2         | 9            | creating nodejs                                           | Installing nodejs and other variable dependencies like nginx          | 19 Feb 2020     | 1        |                   | In Progress |

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


#### Sprint Summary Planning;

* Setting up Infrastructure
* Configuring Jenkins setup, authentication
* Using ansible vault password file

![Phase1](/Images/initial.PNG)

![Task progress](/Images/phase1.PNG)

![Final](/Images/final.PNG)




