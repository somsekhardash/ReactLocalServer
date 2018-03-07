pid=$(netstat -a -o -n | grep 127.0.0.1:5001 | grep LISTENING | grep -o '[0-9]*$')
taskkill -F -PID  $pid