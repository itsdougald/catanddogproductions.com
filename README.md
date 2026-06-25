# catanddogproductions.com

Static responsive rebuild of the legacy Cat And Dog Productions PHP website.

## Build

```bash
npm run build
npm run check
```

The build script converts the legacy PHP content pages into static HTML under `dist/`, rewrites internal `.php` links to `.html`, copies deployable assets, and keeps the old dynamic blog/admin engine out of the S3 output.

Historical photo-album links are normalized under `/album/...`. Those album files were not present in this export, so add them under `dist/album/` before deployment if you want those archive links to resolve.

## Local Preview

```bash
npm run serve
```

## Deploy To S3

```bash
npm run build
npm run check
npm run deploy:s3
```

The target bucket is `catanddogproductions.com`.

For HTTPS on `catanddogproductions.com`, create the ACM certificate in `us-east-1` and put CloudFront in front of the S3 website or bucket origin. S3 website hosting alone does not attach ACM certificates to a custom domain.
