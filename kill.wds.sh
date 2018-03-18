pid=$(netstat -a -o -n | grep 0.0.0.0:5001 | grep LISTENING | grep -o '[0-9]*$')
taskkill -F -PID  $pid