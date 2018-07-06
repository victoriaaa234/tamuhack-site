#!/bin/bash

# Exit on any error
set -e

sudo chown -R ubuntu:ubuntu /home/ubuntu/.kube
kubectl patch deployment tamuhack-site -p
'{"spec":{"template":{"spec":{"containers":[{"name":"tamuhack-site","image":"gcr.io/'"$GCP_PROJECT"'/'"$IMAGE_NAME"':'"$CIRCLE_SHA1"'"}]}}}}'
