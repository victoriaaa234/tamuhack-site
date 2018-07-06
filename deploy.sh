#!/bin/bash

# Exit on any error
set -e

sudo /opt/google-cloud-sdk/bin/gcloud docker -- push gcr.io/${GCP_PROJECT}/${IMAGE_NAME}:$CIRCLE_SHA1
sudo chown -R ubuntu:ubuntu /home/ubuntu/.kube
kubectl patch deployment tamuhack-latest-build -p
'{"spec":{"template":{"spec":{"containers":[{"name":"tamuhack-latest-build","image":"gcr.io/'"$GCP_PROJECT"'/'"$IMAGE_NAME"':'"$CIRCLE_SHA1"'"}]}}}}'
