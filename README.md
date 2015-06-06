ppdb2redis
==========

ppdb2redis is a script that allows fast exporting ppdb paraphrase database to Redis. PPDB is stored in sorted set of Redis according to the paraphase score, where a key is the left paraphases in PPDB and values are the right paraphrases with POS tag.


    offer: 

	give_VB

	propose_VB

	....


    ./redis-cli -p [PORT] -n [DB] zrange "offer" 0 -1 WITHSCORES

Tested on Redis 2.4.15

redis.conf is an example of redis config file

USAGE: ruby ppdb2redis.rb -ppdbfile | redis/redis-cli -p [POST] -n [REDISDB] --pipe  --pipe-timeout 0

USAGE with screen:

Create a session:

    screen

    ruby ppdb2redis.rb -ppdbfile | redis/redis-cli -p [POST] -n [REDISDB] --pipe  --pipe-timeout 0

    [close the session]

Restore the session:
 
    screen -ls

    screen -r [ID]
