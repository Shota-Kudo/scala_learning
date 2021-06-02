FROM hseeberger/scala-sbt:8u222_1.3.5_2.13.1

RUN apt-get update && apt-get install -y \
  curl \
  git \
  libssl-dev \
  pkg-config \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY ./src /app

RUN git config --global core.autocrlf input

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash \
  && . ~/.bashrc \
  && nvm install --lts \
  && npm install --global yarn
