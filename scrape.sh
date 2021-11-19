#if the .env file exists, then export the environment variables from it
#.env file sample:
#=============================================
#APPLICATION_ID=<>
#API_KEY=<>
#SITE_URL=https://ipc144.sdds.ca
#INDEX_NAME=docusaurus
#=============================================
if [ -f .env ]; then
    export $(xargs < .env)
fi

# run the docker container with the following arguments:
#    -it: interactive mode
#    --env-file=.env: the environment variables are set from the .env file
#    -e "CONFIG=$(cat ./config.json | jq -r tostring)": the config.json file is passed as an environment variable need to install jq python library if you dont have it
# the container will run the bash script that will run the scraper
# The scraper will run in the background, and the container will exit.
sudo docker run \
        -it --env-file=.env -e "CONFIG=$(cat ./algolia-config.json | jq -r tostring)" \
        algolia/docsearch-scraper

