FROM python:3.10
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# ADD . /app

RUN pip install --upgrade pip
COPY ./requirements.txt /app/requirements.txt

# install dependencies
# RUN pip install --upgrade pip
# COPY ./requirements.txt .
# RUN pip install wheel
# RUN \ 
#     pip3 install --no-cache-dir Cython
RUN pip install wheel
RUN pip install -r requirements.txt
# RUN python manage.py makemigrations
# RUN python manage.py migrate
#Copy project to /app folder 
COPY  . .

#Collect Static Files
RUN python manage.py collectstatic --noinput