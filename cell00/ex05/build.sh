#!/bin/bash

i=0
for arg in "$@"
do
	if [ -n $arg ]
	then
		mkdir "ex"$arg;
		((i+=1));
	else
		break;
	fi
done