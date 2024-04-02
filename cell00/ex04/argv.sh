#!/bin/bash

i=0
for arg in "$@"
do
	if [ -n $arg ] && ! [ $i -gt 2 ]
	then
		echo $arg;
		((i+=1));
	else
		break;
	fi
done