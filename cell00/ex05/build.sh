#!/bin/bash

i=0
for arg in "$@"
do
	mkdir "ex"$arg;
	((i+=1));
done