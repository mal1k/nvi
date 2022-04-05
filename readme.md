# NVI

## About Broadcasting

NVI uses socket communication to update securities.

Packages needed to implement broadcasting communication:

- laravel-echo-server
- redis-server

### Redis server

```
sudo yum install redis -y
redis-server
```
### Laravel Echo Server

The configuration of the server is in laravel-echo-server.json file.
The broadcasting port is 6001.

```
npm install -g laravel-echo-server
laravel-echo-server start
```

To start communication with laravel-echo-server the authHost env in laravel-echo-server.json must match the dns name of the server (in my case I had to add the DNS name in /etc/hosts of the container where laravel-echo-server was running). 

## About other libraries

Option 1
```
yum install php72w-bc_math
rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
yum install php72w-pecl-stats
```

Option 2 
```
yum -y install gcc
yum -y install gcc-c++
yum provides pecl
yum install php72w-pear
yum install php72w-devel
pecl install stats-2.0.3
nano /etc/php.d/stats.ini

```

add:

```
extension=stats.so
```

Then:
```
systemctl restart httpd
```




## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
