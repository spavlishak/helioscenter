VERSION := $(shell cat VERSION)
IMAGE   := gcr.io/helios-devel/helioscenter:$(VERSION)

.PHONY: default build push run ci deploy

default: build run

build:
	@echo '> Building "helioscenter" docker image...'
	@docker build -t $(IMAGE) .

push: build
	gcloud docker -- push $(IMAGE)

run:
	@echo '> Starting "helioscenter" container...'
	@docker run -d $(IMAGE)

ci:
	@fly -t ci set-pipeline -p helioscenter -c config/pipelines/review.yml -n
	@fly -t ci unpause-pipeline -p helioscenter

deploy: push
	@helm install ./config/charts/helioscenter --set "image.tag=$(VERSION)"
