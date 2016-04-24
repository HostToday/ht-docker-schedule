(cd app-node && npm test)
docker build -t scheduleimg .
docker stop schedule
docker rm $(docker ps -q -f status=exited)
docker run --name schedule scheduleimg