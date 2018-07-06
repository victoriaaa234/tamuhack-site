#!/bin/bash

# Exit on any error
set -e

sudo chown -R ubuntu:ubuntu /home/ubuntu/.kube
kubectl patch deployment tamuhack-latest-build -p
'{"spec":{"template":{"spec":{"containers":[{"name":"tamuhack-latest-build","image":"gcr.io/'"$GCP_PROJECT"'/'"$IMAGE_NAME"':'"$CIRCLE_SHA1"'"}]}}}}'
