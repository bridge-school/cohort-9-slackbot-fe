#!/bin/sh -ex

set -ex

BUCKET=$1

cd build

aws s3 sync \
	--exclude index.html \
	. s3://"${BUCKET}" --acl public-read

aws s3 cp \
	--cache-control max-age=0 \
	index.html s3://"${BUCKET}" --acl public-read

