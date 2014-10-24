ppdb2redis
==========

ppdb2redis script allows fast exporting ppdb paraphrase database to redis. PPDB is stored in sorted set, where the key is the left paraphases in PPDB and values are the right paraphrases with POS tag.

offer: 
	give_VB
	propose_VB
	....

./redis-cli -p [PORT] -n [DB] zrange "offer" 0 -1 WITHSCORES

Tested with redis version 2.4.15

redis.conf is an example of redis config file

USAGE: ruby ppdb2redis.rb -ppdbfile | redis/redis-cli -p [POST] -n [REDISDB] --pipe

It is very convinient to use the tool with screen

screen
ruby ppdb2redis.rb -ppdbfile | redis/redis-cli -p [POST] -n [REDISDB] --pipe
[close the session]

screen -ls
screen -r [ID]