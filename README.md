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
NODE_OPTIONS=--openssl-legacy-provider yarn dev
```

### Build

```sh
NODE_OPTIONS=--openssl-legacy-provider yarn build
```

> **Note:** `NODE_OPTIONS=--openssl-legacy-provider` is required because the
> current versions of Next.js (11) and webpack use the MD4 hashing algorithm,
> which is not supported by Node.js 22's OpenSSL. This workaround will no
> longer be needed once Next.js and its dependencies are upgraded.

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
