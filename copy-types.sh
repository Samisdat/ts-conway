#!/usr/bin/env bash

echo "copy @types from container into host to make enable autocomplete etc in ide"

docker cp conway_conway_1:/home/conway/node_modules/@types $(pwd)/node_modules