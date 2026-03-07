# mattgilbride.com

Personal website built with Next.js, hosted on AWS (S3 + CloudFront).

## Development

### Prerequisites

- Node.js 22+
- Yarn 1.x

### Install dependencies

```sh
yarn install
```

### Run locally

```sh
yarn dev
```

### Build

```sh
yarn build
```

### Deploy

```sh
yarn deploy
```

## Infrastructure

AWS CDK code lives in `infrastructure/`. It manages the S3 bucket, CloudFront
distribution, and Route53 DNS records.

```sh
cd infrastructure
yarn install
yarn cdk synth
yarn cdk deploy
```
