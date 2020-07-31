docker build -t robertofrida .
docker run -p 3003:3000 --restart unless-stopped --name="fridbert" -t robertofrida
