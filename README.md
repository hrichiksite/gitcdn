# GitFire CDN 

## New CDN to serve raw git content ;)

> If your just want the Vercel CDN use
> https://gitcdn.hrichik.xyz

### This CDN uses serverless functions by vercel to fetch the content


## Main Tasks To Complete
## 1) We need a system to block bad actors, its quite simple but the cache will still not update for ~6 months~ (I removed that system) so it still shows the bad actors content. I got a solution but thats not enough, I found that using cloudflare console and API, I can purge custom URLs so the cache will be purged and the blocked notice will show. Here the problem solves but parcialy. If that bad actor has 2 files being inside 1 repos being served but only one is reported, I go on and blacklist that user and purge the URLs that was reported but the other file continues to serve till cache expires, so blocking wents waste as it still hurts more after blocking.
