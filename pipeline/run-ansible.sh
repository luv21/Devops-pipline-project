#!/bin/bash

# Exit on error
set -e

# Trace commands as we run them:
set -x

# Print error message and exit with error code 1
function die {
    echo "$1"
    exit 1
}

# Check the number of arguments
[ $# -ge 5 ] || die "usage: $0 <playbook> <inventory>"

PLAYBOOK=$1
INVENTORY=$2
JK_USERNAME=$3
JK_PASSWORD=$4
VAULT_PASSWORD_FILE=$5

ansible-playbook --vault-password-file $VAULT_PASSWORD_FILE $PLAYBOOK -i $INVENTORY -e "{'JK_USR': $JK_USERNAME, 'JK_PASSWD': $JK_PASSWORD}"
