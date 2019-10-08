##Aplicación que regresa el clima de un lugar, que es recibido por linea de comandos

Ejemplo: node app -d "New York"
Y retorna El clima de New York City, New York es de 15.84 °C


Se usa el paquete de AXIOS

Se hacen llamadas a 2 servicios, el primero para obtener latitud y longitud y el segundo para obtener el clima
``
https://rapidapi.com/dev132/api/city-geo-location-lookup  para obtener latitud y longitud`
``
https://openweathermap.org/   para obtener el clima