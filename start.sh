http-server -S -C cert/cert.pem --cors -K cert/key.pem

# http-server -S -C /etc/letsencrypt/live/XXXXXXXXX/cert.pem -K /etc/letsencrypt/live/XXXXXXXXX/privkey.pem -d -p 443