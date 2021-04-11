# This Repo Is No Longer Maintained and is not going to recive any updates, please go to [https://github.com/hrichiksite/gitfire](https://github.com/hrichiksite/gitfire) for the latest

# GitFire CDN 

## New CDN to serve raw git content ;)

### This CDN uses serverless functions by vercel to fetch the content


## Main Tasks To Complete
## 1) We need a system to block bad actors, its quite simple but the cache will still not update for ~6 months~ (I removed that system) so it still shows the bad actors content. I got a solution but thats not enough, I found that using cloudflare console and API, I can purge custom URLs so the cache will be purged and the blocked notice will show. Here the problem solves but parcialy. If that bad actor has 2 files being inside 1 repos being served but only one is reported, I go on and blacklist that user and purge the URLs that was reported but the other file continues to serve till cache expires, so blocking wents waste as it still hurts more after blocking.



### Powered By
 ![Cloudflare](https://www.cloudflare.com/img/logo-web-badges/cf-logo-on-white-bg.svg)
