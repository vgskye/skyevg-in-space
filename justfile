deploy:
    pnpm build
    ssh bridget "rm -rf caddy/static/skye.vg-new-base"
    scp -r dist bridget:caddy/static/skye.vg-new-base