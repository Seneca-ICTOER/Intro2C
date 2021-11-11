if [ -f .env ]; then
    export $(xargs < .env)
fi

sudo docker run \
        -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" \
        algolia/docsearch-scraper

