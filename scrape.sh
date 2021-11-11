if [ -f .env ]; then
    export $(xargs < .env)
fi

docker run \
	-e APPLICATION_ID=$(printenv APPLICATION_ID) \
	-e API_KEY=$(printenv API_KEY) \
	-e CONFIG="$(cat config.json | jq '.start_urls=[`https://cghub.ca`] | jq '.index_name=docusaurus' | jq -r tostring)" \
	algolia/docsearch-scraper:v1.13.0