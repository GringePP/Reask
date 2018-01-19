# Reask
[![Build Status](https://travis-ci.org/GringePP/Reask.svg?branch=master)](https://travis-ci.org/GringePP/Reask)

Reask is a project developed with React&amp;Flask.

## Try it!
### Enviroment
* Python 3.6.x
* Node 6.11.x

### Restore dependencies

```shell
# dependencies for python
pip install -r requirements.txt

cd client

# dependencies for npm
npm install
npm install webpack -g
```
### Start Tornado service

```shell
# in project root
python manage.py tornado
```

### Start webpage service

```shell
cd client

npm run dev-server
```

### Boom

Open `http://localhost:8080/` in your browser and see what happens!

## License

```
MIT License

Copyright (c) 2018 GringePP

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
